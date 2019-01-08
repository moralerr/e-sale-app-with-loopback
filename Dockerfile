FROM node:11
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
RUN chmod +x /usr/local/bin/docker-compose
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
