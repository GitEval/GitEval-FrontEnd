FROM node:20.15.1
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
# Build server file
RUN pnpm config set registry https://registry.npm.taobao.org/
RUN pnpm install
# Bundle app source
EXPOSE 3000
CMD [ "pnpm", "start" ]