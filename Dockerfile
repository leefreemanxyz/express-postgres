FROM node:10.1.0-alpine

WORKDIR /usr/app

RUN npm install -g nodemon @babel/node @babel/core knex

COPY package.json .
RUN npm install
COPY . .
CMD ["nodemon", "--exec", "babel-node", "src/"]