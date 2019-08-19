### Blog

https://medium.com/@Da_vidgf/using-cognito-for-users-management-in-your-serverless-application-1695fec9e225

### Web to sign in

https://<domain>.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=<client_id>&redirect_uri=<redirect_uri>

### Important bits

* App client settings - setup Web Domain
* Enable Cognito User Pool
* Select implicit grant and OAuth scopes
* Set domain name

### Token

* Will be added to the redirect url after # so that it is only available to web clients
* cognito uses id token to authenticate users

### Example

```
curl https://<api-domain>.execute-api.us-east-1.amazonaws.com/dev/hello -H 'Authorization: eyJraWQiOiJOVlZCbGRaMVxxxxxxxxx'
```
