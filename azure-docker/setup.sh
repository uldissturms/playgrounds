brew install docker-machine
brew install azure-cli

MACHINE_NAME='azure-docker-host'

# setup co-administrator account, publish & import management certificate file
# export subscription id into subscription-id file
# create docker machine host
docker-machine create --driver azure --azure-subscription-id $(cat subscription-id) --azure-location westeurope --azure-open-port 80 $MACHINE_NAME

# get list of machines
docker-machine ls

# point local docker to azure-docker-host
eval $(docker-machine env $MACHINE_NAME)

# test docker host is running and can expose web application
docker run -d -p 80:80 tutum/hello-world
