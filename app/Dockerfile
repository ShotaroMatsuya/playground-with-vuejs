FROM node:16-alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

RUN apk update && \
  npm install -g npm && \
  npm install -g @vue/cli &&\
  npm install --save vue-router@next &&\
  npm install --save vuex@next

COPY . .

EXPOSE 8080

CMD [ "npm","run","serve" ]