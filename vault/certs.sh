echo '========= certs.......... ========='
echo '========= enable......... ========='
docker-compose run client vault auth-enable cert
echo '========= config......... ========='
docker-compose run client vault write auth/cert/certs/web display_name=web policies=web,prod certificate=@/certs/web.crt ttl=3600
echo '========= done........... ========='
