FROM node:15

WORKDIR /usr/src/app

COPY ./app ./

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node","index.js"]