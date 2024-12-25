FROM node:22-alpine

WORKDIR /app

# 首先只复制包管理文件
COPY package*.json ./

# 安装依赖
RUN npm install --production

# 然后再复制其他源代码文件
COPY . .

EXPOSE 5000

CMD ["npm", "start"] 