FROM node:18-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]