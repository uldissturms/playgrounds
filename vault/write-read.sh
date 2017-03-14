echo '========= write.......... ========= '
docker-compose run client vault write secret/test value=Password1
echo '========= read........... ========= '
docker-compose run client read -format=json secret/test
echo '========= done........... ========= '
