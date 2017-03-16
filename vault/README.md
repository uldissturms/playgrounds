## instructions
- option A: use docker-compose client service
- option B: use local client
  - install vault locally:

    ```
    brew install vault
    ```
  - export vault env variables (url and token):

    ```
    export VAULT_ADDR=http://localhost:8200
    export VAULT_TOKEN=16a9d37c-d7ac-d7e7-d473-616c7b7f42ca
    ```

## test
run: `vault status` to make sure everything is configured successfully
