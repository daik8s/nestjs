FROM node:lts-alpine
LABEL maintainer "dai15081999@gmail.com"

WORKDIR /app
EXPOSE 3000

COPY package.json package-lock.json ./
RUN touch .env

RUN set -x && npm install

COPY . .

CMD [ "npm", "run", "start:dev" ]
