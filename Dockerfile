FROM node:20.15.1

# 安装 pnpm
RUN npm install -g pnpm

# 创建应用目录
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# 复制项目文件
COPY . /usr/src/app

# 设置淘宝的 pnpm registry
RUN pnpm config set registry https://registry.npm.taobao.org/

# 安装依赖
RUN pnpm install

# 暴露 Vite 默认端口
EXPOSE 5173

# 启动 Vite 开发服务器
CMD ["pnpm", "dev"]