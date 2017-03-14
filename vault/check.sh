echo '========= checking.......... ========= '
echo '========= checking server... ========= '
docker-compose exec server vault
echo '========= checking client... ========= '
docker-compose run client vault status
echo '========= done.............. ========= '
