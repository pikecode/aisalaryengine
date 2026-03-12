# AI薪引擎 - 生产环境部署文档

## 部署信息

**服务器：** 47.92.236.28
**端口：** 8092
**访问地址：** http://47.92.236.28:8092
**部署路径：** /var/www/aisalaryengine
**部署时间：** 2026-03-12

## 服务器环境

- **操作系统：** CentOS Linux 7 (Core)
- **Web服务器：** Nginx 1.20.1
- **磁盘空间：** 40G (已用16G, 42%)
- **内存：** 1.7G (已用625M)

## 现有项目端口分布

| 端口 | 项目 | 说明 |
|------|------|------|
| 80/443 | 主站 | Nginx主服务 |
| 3000 | Docker服务 | 容器服务 |
| 8006 | Python服务 | 后端API |
| 8080 | 其他项目 | - |
| 8081 | 其他项目 | - |
| 8090 | 其他项目 | - |
| 8091 | 其他项目 | - |
| **8092** | **AI薪引擎** | **本项目** |

## 部署步骤

### 1. 本地构建

```bash
# 安装依赖
npm install

# 构建生产版本
npm run build

# 验证构建产物
ls -lh dist/
```

### 2. 上传到服务器

```bash
# 使用rsync上传（推荐）
rsync -avz --progress dist/ root@47.92.236.28:/var/www/aisalaryengine/

# 或使用scp
scp -r dist/* root@47.92.236.28:/var/www/aisalaryengine/
```

### 3. Nginx配置

配置文件位置：`/etc/nginx/conf.d/aisalaryengine.conf`

```nginx
server {
    listen 8092;
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
```

### 4. 应用配置

```bash
# 测试Nginx配置
nginx -t

# 重载Nginx
systemctl reload nginx
```

### 5. 开放防火墙端口

```bash
# 添加端口规则
firewall-cmd --permanent --add-port=8092/tcp

# 重载防火墙
firewall-cmd --reload

# 验证规则
firewall-cmd --list-ports | grep 8092
```

## 一键部署脚本

创建 `deploy.sh` 文件：

```bash
#!/bin/bash
set -e

SERVER="47.92.236.28"
PORT="8092"
DEPLOY_PATH="/var/www/aisalaryengine"

echo "🚀 开始部署 AI薪引擎..."

# 1. 本地构建
echo "📦 构建项目..."
npm run build

# 2. 备份现有版本
echo "💾 备份现有版本..."
ssh root@$SERVER "if [ -d $DEPLOY_PATH ]; then cp -r $DEPLOY_PATH ${DEPLOY_PATH}.backup.$(date +%Y%m%d_%H%M%S); fi"

# 3. 上传文件
echo "📤 上传文件..."
rsync -avz --progress --delete dist/ root@$SERVER:$DEPLOY_PATH/

# 4. 重载Nginx
echo "🔄 重载Nginx..."
ssh root@$SERVER "nginx -t && systemctl reload nginx"

# 5. 验证部署
echo "✅ 验证部署..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://$SERVER:$PORT)
if [ "$HTTP_CODE" = "200" ]; then
    echo "🎉 部署成功！"
    echo "访问地址: http://$SERVER:$PORT"
else
    echo "⚠️  部署完成但返回状态码: $HTTP_CODE"
fi
```

使用方法：

```bash
chmod +x deploy.sh
./deploy.sh
```

## 验证部署

### 本地验证

```bash
# 检查HTTP状态
curl -I http://47.92.236.28:8092

# 检查响应内容
curl http://47.92.236.28:8092

# 检查响应时间
curl -w "响应时间: %{time_total}s\n" -o /dev/null -s http://47.92.236.28:8092
```

### 服务器端验证

```bash
# 检查Nginx进程
systemctl status nginx

# 检查端口监听
netstat -tlnp | grep 8092

# 查看访问日var/log/nginx/access.log

# 查看错误日志
tail -f /var/log/nginx/error.log
```

## 故障排查

### 问题1: 无法访问网站

**检查步骤：**

```bash
# 1. 检查Nginx是否运行
systemctl status nginx

# 2. 检查端口是否监听
netstat -tlnp | grep 8092

# 3. 检查防火墙规则
firewall-cmd --list-ports | grep 8092

# 4. 测试本地访问
curl http://localhost:8092
```

**解决方案：**
- Nginx未运行：`systemctl start nginx`
- 端口未开放：`firewall-cmd --permanent --add-port=8092/tcp && firewall-cmd --reload`
- 配置错误：`nginx -t` 检查配置

### 问题2: 404错误

**检查步骤：**

```bash
# 检查文件是否存在
ls -la /var/www/aisalaryengine/

# 检查文件权ls -l /var/www/aisalaryengine/index.html
```

**解决方案：**
- 文件不存在：重新上传 `rsync -avz dist/ root@47.92.236.28:/var/www/aisalaryengine/`
- 权限问题：`chmod -R 755 /var/www/aisalaryengine`

### 问题3: 路由不工作

**原因：** SPA应用需要配置fallback

**解决方案：** 确保Nginx配置包含：

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### 问题4: 静态资源404

**检查步骤：**

```bash
# 检查assets目录
ls -la /var/www/aisalaryengine/assets/

# 检查Nginx错误日志
tail -20 /var/log/nginx/error.log
```

**解决方案：**
- 确保上传时包含assets目录
- 检查Vite构建配置中的base路径

## 回滚方案

### 快速回滚

```bash
# 查看备份
ls -la /var/www/ | grep aisalaryengine.backup

# 回滚到指定版本
BACKUP_DIR="aisalaryengine.backup.20260312_180000"
rm -rf /var/www/aisalaryengine
mv /var/www/$BACKUP_DIR /var/www/aisalaryengine
systemctl reload nginx
```

### 自动备份脚本

```bash
#!/bin/bash
# backup.sh - 定期备份脚本

DEPLOY_PATH="/var/www/aisalaryengine"
BACKUP_DIR="/var/www/backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/aisalaryengine_$DATE.tar.gz -C /var/www aisalaryengine

# 保留最近7天的备份
find $BACKUP_DIR -name "aisalaryengine_*.tar.gz" -mtime +7 -delete

echo "备份完成: $BACKUP_DIR/aisalaryengine_$DATE.tar.gz"
```

添加到crontab：

```bash
# 每天凌晨2点自动备份
0 2 * * * /root/backup.sh
```

## 性能优化

### 1. 启用HTTP/2

```nginx
server {
    listen 8092 http2;
    # ... 其他配置
}
```

### 2. 增加缓存时间

```nginx
location ~* \.(js|css)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
}
```

### 3. 启用Brotli压缩

```nginx
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml;
```

## 监控和日志

### 访问日志

```bash
# 实时查看访问
tail -f /var/log/nginx/access.log | grep 8092

# 统计访问量
cat /var/log/nginx/access.log | grep 8092 | wc -l

# 统计IP访问次数
cat /var/log/nginx/access.log | grep 8092 | awk '{print $1}' | sort | uniq -c | sort -rn | head -10
```

### 错误日志

```bash
# 查看最近错误
tail -50 /var/log/nginx/error.log

# 实时监控错误
tail -f /var/log/nginx/error.log
```

### 系统资源监控

```bash
# CPU和内存使用
top -bn1 | head -20

# 磁盘使用
df -h

# 网络连接
netstat -an | grep 8092 | wc -l
```

## 安全建议

### 1. 修改默认密码

```bash
# 立即修改root密码
passwd root
```

### 2. 创建专用部署用户

```bash
# 创建deploy用户
adduser deploy
usermod -aG wheel deploy

# 配置SSH密钥
ssh-keygen -t rsa -b 4096
ssh-copy-id deploy@47.92.236.28
```

### 3. 禁用root SSH登录

编辑 `/etc/ssh/sshd_config`：

```
PermitRootLogin no
PasswordAuthentication no
```

重启SSH服务：

```bash
systemctl restart sshd
```

### 4. 配置SSL证书（可选）

```bash
# 安装certbot
yum install certbot python2-certbot-nginx

# 获取证书
certbot --nginx -d yourdomain.com

# 自动续期
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew -q" | sudo tee -a /etc/crontab > /dev/null
```

## 维护计划

### 日常维护

- [ ] 每天检查错误日志
- [ ] 每周检查磁盘空间
- [ ] 每月更新系统补丁

### 定期任务

- [ ] 每周备份项目文件
- [ ] 每月检查Nginx版本更新
- [ ] 每季度审查安全配置

## 联系信息

**项目仓库：** https://github.com/pikecode/aisalaryengine
**部署日期：** 2026-03-12
**维护人员：** [待填写]

---

**最后更新：** 2026-03-12