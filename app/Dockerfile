FROM node:16-alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080
# 初回時のみ
RUN apk update && \
  npm install -g npm && \
  npm install -g @vue/cli

CMD [ "npm","run","serve" ]