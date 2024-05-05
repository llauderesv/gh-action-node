FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY *.js ./

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]