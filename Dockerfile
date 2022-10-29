FROM node:latest

#Make directory for /usr/src/app
RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app

#Copy package.json to /usr/src/app
COPY package.json /usr/src/app/

#Install package
RUN npm install

# Bundle app source
COPY . /usr/src/app/

EXPOSE 3000

CMD ["npm","start"]