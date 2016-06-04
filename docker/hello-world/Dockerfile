FROM node:6-slim
LABEL version="1.0" \
      description="demo of basic functionality"
ENV HELLO World
WORKDIR /usr/app
ADD . /usr/app
RUN echo 'files in container:' && ls
CMD ["node", "app.js"]
