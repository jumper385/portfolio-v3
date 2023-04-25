FROM node:latest
WORKDIR /app

COPY package.json .

RUN npm install -g npm@latest
RUN npm install
COPY . .
RUN npm run build

CMD ["node","build/index.js"]
