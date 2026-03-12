# AI Salary Engine 部署文档

## 安全部署准备

### 1. 服务器安全配置
```bash
# 创建专用部署用户（不使用root）
sudo adduser deploy
sudo usermod -aG sudo deploy

# 配置SSH密钥认证
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
ssh-copy-id deploy@47.92.236.28

# 禁用root SSH登录和密码认证
sudo nano /etc/ssh/sshd_config
# PermitRootLogin no
# PasswordAuthentication no
sudo systemctl restart ssh
```

### 2. 环境检查脚本
```bash
#!/bin/bash
# check-server.sh - 检查服务器现有项目

echo "=== 检查运行中的服务 ==="
sudo systemctl list-units --type=service --state=running | grep -E "(nginx|apache|node|pm2)"

echo "=== 检查端口占用 ==="
sudo netstat -tlnp | grep -E ":80|:443|:3000|:5173|:8080"

echo "=== 检查Nginx配置 ==="
sudo nginx -t 2>/dev/null && echo "Nginx配置正常" || echo "Nginx未安装或配置有误"

echo "=== 检查Node.js版本 ==="
node --version 2>/dev/null || echo "Node.js未安装"
npm --version 2>/dev/null || echo "npm未安装"

echo "=== 检查PM2进程 ==="
pm2 list 2>/dev/null || echo "PM2未安装"

echo "=== 检查磁盘空间 ==="
df -h

echo "=== 检查内存使用 ==="
free -h
```

## 部署方案

### 方案A: 静态部署（推荐）
```bash
# 1. 本地构建
npm run build

# 2. 上传到服务器
rsync -avz --progress dist/ deploy@47.92.236.28:/var/www/aisalaryengine/

# 3. Nginx配置
sudo nano /etc/nginx/sites-available/aisalaryengine
```

### 方案B: Docker部署
```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
```

### 方案C: PM2部署
```bash
# 如果需要SSR或API服务
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## Nginx配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/aisalaryengine;
    index index.html;

    # Gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
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
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

## 部署流程

### 1. 预部署检查
- [ ] 服务器资源充足（磁盘、内存、CPU）
- [ ] 端口未被占用
- [ ] 域名DNS解析正确
- [ ] SSL证书准备就绪

### 2. 部署步骤
```bash
# 1. 连接服务器（使用安全用户）
ssh deploy@47.92.236.28

# 2. 创建项目目录
sudo mkdir -p /var/www/aisalaryengine
sudo chown deploy:deploy /var/www/aisalaryengine

# 3. 本地构建并上传
npm run build
rsync -avz --progress dist/ deploy@47.92.236.28:/var/www/aisalaryengine/

# 4. 配置Nginx
sudo cp nginx-config /etc/nginx/sites-available/aisalaryengine
sudo ln -s /etc/nginx/sites-availaryengine /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3. 部署后验证
- [ ] 网站可正常访问
- [ ] 移动端适配正常
- [ ] 静态资源加载正常
- [ ] 路由跳转正常

## 监控和维护

### 日志监控
```bash
# Nginx访问日志
sudo tail -f /var/log/nginx/access.log

# Nginx错误日志
sudo tail -f /var/log/nginx/error.log

# 系统资源监控
htop
```

### 自动化部署脚本
```bash
#!/bin/bash
# deploy.sh

set -e

echo "开始部署 AI Salary Engine..."

# 构建
npm run build

# 备份当前版本
ssh deploy@47.92.236.28 "cp -r /var/www/aisalaryengine /var/www/aisalaryengine.backup.$(date +%Y%m%d_%H%M%S)"

# 上传新版本
rsync -avz --progress --delete dist/ deploy@47.92.236.28:/var/www/aisalaryengine/

# 重载Nginx
ssh deploy@47.92.236.28 "sudo nginx -t && sudo systemctl reload nginx"

echo "部署完成！"
echo "访问地址: http://47.92.236.28"
```

## 安全注意事项

1. **永远不要使用root用户部署**
2. **使用SSH密钥而非密码认证**
3. **定期更新系统和依赖**
4. **配置防火墙规则**
5. **启用HTTPS（Let's Encrypt）**
6. **定期备份**

## 故障排除

### 常见问题
1. **404错误** - 检查Nginx配置和文件路径
2. **静态资源404** - 检查资源路径和权限
3. **路由不工作** - 确保配置了SPA fallback
4. **性能问题** - 启用Gzip和缓存

### 回滚方案
```bash
# 快速回滚到备份版本
ssh deploy@47.92.236.28 "sudo rm -rf /var/www/aisalaryengine && sudo mv /var/www/aisalaryengine.backup.YYYYMMDD_HHMMSS /var/www/aisalaryengine"
```