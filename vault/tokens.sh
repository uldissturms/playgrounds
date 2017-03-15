echo '========= tokens...... ========= '
echo '========= issue....... ========= '
token=$(docker-compose run client vault token-create -format=json)
echo "$token" | jq
echo '========= auth....... ========= '
client_token=$(echo "$token" | jq -r .auth.client_token)
docker-compose run client vault auth $client_token
echo '========= revoke....... ========= '
docker-compose run client vault token-revoke $client_token
echo '========= done........... ========= '
