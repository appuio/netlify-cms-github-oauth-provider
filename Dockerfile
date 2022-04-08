FROM docker.io/library/node:lts-alpine

WORKDIR /usr/src/app

ENV \
  NODE_ENV=production \
  PORT=3000 \
  HOST=0.0.0.0

CMD [ "npm", "start" ]

COPY package*.json ./

RUN npm i --only=production

# Bundle app source
COPY . .
