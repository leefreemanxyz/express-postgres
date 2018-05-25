FROM node:10.1.0-alpine

WORKDIR /usr/app

RUN npm install -g nodemon

COPY package.json .
RUN npm install --quiet
COPY . .
CMD ["nodemon", "src/"]