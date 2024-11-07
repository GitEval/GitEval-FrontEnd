# 使用 Node.js 20.15.1 作为基础镜像
FROM node:20.15.1

# 创建应用目录
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# 复制所有文件到容器内
COPY . /usr/src/app

# 安装 pnpm（全局）
RUN npm install -g pnpm

# 安装项目依赖
RUN pnpm install

# 暴露端口
EXPOSE 5173

# 启动应用
CMD [ "pnpm", "run" ,"dev"]
