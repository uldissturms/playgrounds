MACHINE_NAME='azure-docker-host'

docker-machine kill $MACHINE_NAME
docker-machine rm $MACHINE_NAME --force

# note that storage account is still left after teardown
# TODO: use azure cli to remove it to avoid costs
