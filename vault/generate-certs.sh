echo '========= certs.......... ========='
echo '========= generate....... ========='
mkdir -p certs
pushd certs
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 1826 -key ca.key -out ca.crt -subj '/CN=ca.local/O=Local CA/C=GB'
openssl genrsa -out web.key 4096
openssl req -new -key web.key -out web.csr -subj '/CN=web.local/O=Local Web/C=GB'
openssl x509 -req -days 730 -in web.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out web.crt
popd
echo '========= done........... ========='
