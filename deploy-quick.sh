#!/bin/bash
# AI Salary Engine 快速部署脚本
# 使用方法: bash deploy-quick.sh

set -e

SERVER="47.92.236.28"
PROJECT_NAME="aisalaryengine"
DEPLOY_PATH="/var/www/$PROJECT_NAME"

echo "=== AI Salary Engine 部署脚本 ==="
echo "目标服务器: $SERVER"
echo "部署路径: $DEPLOY_PATH"
echo ""

# 1. 本地构建
echo "📦 开始构建..."
npm run build
echo "✅ 构建完成"

# 2. 检查服务器连接
echo ""
echo "🔍 检查服务器连接..."
if ! ssh -o ConnectTimeout=5 root@$SERVER "echo '连接成功'" 2>/dev/null; then
    echo "❌ 无法连接到服务器，请检查："
    echo "   1. 服务器IP是否正确"
    echo "   2. SSH服务是否运行"
    echo "   3. 防火墙是否开放22端口"
    exit 1
fi

# 3. 检查服务器环境
echo ""
echo "🔍 检查服务器环境..."
ssh root@$SERVER << 'ENDSSH'
    # 检查Nginx
    if ! command -v nginx &> /dev/null; then
        echo "⚠️  Nginx未安装，正在安装..."
        apt-get update && apt-get install -y nginx
    fi

    # 检查端口占用
    echo "检查端口占用情况..."
    netstat -tlnp | grep -E ":80|:443" || echo "端口80/443可用"

    # 显示现有项目
    echo ""
    echo "现有Web项目:"
    ls -la /var/www/ 2>/dev/null || echo "无现有项目"

    echo ""
    echo "现有Nginx配置:"
    ls -la /etc/nginx/sites-enabled/ 2>/dev/null || echo "无配置"
ENDSSH

# 4. 询问确认
echo ""
read -p "是否继续部署? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ 部署已取消"
    exit 1
fi

# 5. 创建部署目录
echo ""
echo "📁 创建部署目录..."
ssh root@$SERVER "mkdir -p $DEPLOY_PATH && mkdir -p $DEPLOY_PATH.backup"

# 6. 备份现有版本
echo "💾 备份现有版本..."
ssh root@$SERVER "if [ -d $DEPLOY_PATH/index.html ]; then cp -r $DEPLOY_PATH/* $DEPLOY_PATH.backup/; fi"

# 7. 上传文件
echo ""
echo "📤 上传文件到服务器..."
rsync -avz --progress dist/ SERVER:$DEPLOY_PATH/

# 8. 配置Nginx
echo ""
echo "⚙️  配置Nginx..."
ssh root@$SERVER << 'ENDSSH'
cat > /etc/nginx/sites-available/aisalaryengine << 'EOF'
server {
    listen 80;
    server_name _;
    root /var/www/aisalaryengine;
    index index.html;

    # Gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA路由支持
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
}
EOF

    # 启用配置
    ln -sf /etc/nginx/sites-available/aisalaryengine /etc/nginx/sites-enabled/

    # 测试配置
    nginx -t

    # 重载Nginx
    systemctl reload nginx

    echo "✅ Nginx配置完成"
ENDSSH

# 9. 验证部署
echo ""
echo "🔍 验证部署..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://$SERVER)
if [ "$HTTP_CODE" = "200" ]; then
    echo "✅ 部署成功！"
    echo ""
    echo "🎉 访问地址: http://$SERVER"
else
    echo "⚠️  部署完成但网站返回 $HTTP_CODE"
    echo "请检查Nginx日志: ssh root@$SERVER 'tail -f /var/log/nginx/error.log'"
fi

echo ""
echo "=== 部署完成 ==="
