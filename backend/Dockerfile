FROM node:10-alpine
RUN apk update && apk add python make g++
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./ ./
RUN npm i
