FROM node:16.18.1-alpine3.15

WORKDIR /code

ADD . /code
RUN npm install && npm run build 

CMD npm run serve
EXPOSE 3000 