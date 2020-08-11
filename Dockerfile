FROM node:13.11.0

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]