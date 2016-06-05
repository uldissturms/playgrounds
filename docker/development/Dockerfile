FROM node:6-slim
WORKDIR /src
ADD ./src/package.json ./
RUN npm i
RUN echo 'contents of src:' && ls
CMD ["./node_modules/.bin/nodemon", "app.js"]
