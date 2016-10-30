FROM node:slim
RUN apt-get update && apt-get install git -y
RUN git clone https://github.com/panva/node-oidc-provider.git oidc-provider
WORKDIR oidc-provider
RUN npm install
CMD node example
