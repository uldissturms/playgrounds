FROM node:6-slim
ENV HELLO World
WORKDIR /usr/app
ADD . /usr/app
RUN echo 'files in container:' && ls
CMD echo $PWD && node app.js
