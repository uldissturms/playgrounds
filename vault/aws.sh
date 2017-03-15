echo '========= aws mount...... ========= '
docker-compose run client vault mount aws
echo '========= aws config..... ========= '
docker-compose run client vault write aws/config/root \
  access_key=$AWS_ACCESS_KEY_ID \
  secret_key=$AWS_SECRET_ACCESS_KEY
docker-compose run client vault write aws/roles/deploy policy=@/client/aws/policy.json
echo '========= aws iam creds.. ========= '
creds=$(docker-compose run client vault read -format=json aws/creds/deploy)
echo "$creds" | jq
echo '========= revoke aws iam creds.. ========= '
lease_id=$(echo "$creds" | jq -r .lease_id)
docker-compose run client vault revoke $lease_id
echo '========= done........... ========= '
