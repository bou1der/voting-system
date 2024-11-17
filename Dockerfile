FROM docker.io/node:lts-alpine

WORKDIR /app

COPY . . 

RUN npm cache clean --force
RUN npm install --force
RUN npm run build

