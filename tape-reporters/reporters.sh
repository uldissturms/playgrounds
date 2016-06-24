function run_tests() {
  ./node_modules/.bin/tape *.js
}


echo '============= tape reporter ================'
run_tests
echo '============= faucet reporter ================'
run_tests | ./node_modules/.bin/faucet
echo '============= tap-spec reporter ================'
run_tests | ./node_modules/.bin/tap-spec
echo '============= tap-dot reporter ================'
run_tests | ./node_modules/.bin/tap-dot
echo '============= tap-bail reporter ================'
run_tests | ./node_modules/.bin/tap-bail
echo '============= tap-min reporter ================'
run_tests | ./node_modules/.bin/tap-min
echo '============= tap-pessimist reporter ================'
run_tests | ./node_modules/.bin/tap-pessimist
