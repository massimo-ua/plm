FROM node:10-alpine
RUN apk update && apk add python make g++
WORKDIR /usr/src/app
COPY ./ ./
RUN npm i
