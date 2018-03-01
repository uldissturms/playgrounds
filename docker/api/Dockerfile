FROM node

# Fixes home
ENV HOME /root

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package and npm configs
COPY package*.json ./

# Install app dependencies
RUN npm i

# Bundle app source
COPY . /usr/src/app

# Run
EXPOSE 3000
CMD [ "npm", "start" ]
