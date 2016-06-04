# base image
FROM node:6-slim

# sample labels
LABEL version="1.0" \
      description="demo of basic functionality"

# default variable values
ENV HELLO=World FROM=Node

# directory from where RUN and CMD will be executed
WORKDIR /usr/app

# ADD invalidates cache if contents of src have changed
ADD . /usr/app

# output contents of working directory
RUN echo 'files in container:' && ls

# CMD to execute when container is run - one per container
CMD ["node", "app.js"]
