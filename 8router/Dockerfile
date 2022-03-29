FROM node:16-alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

RUN apk update && \
  npm install -g npm && \
  npm install -g @vue/cli \
  npm install --save vue-router@next
COPY . .

EXPOSE 8080
# 初回時のみ

CMD [ "npm","run","serve" ]