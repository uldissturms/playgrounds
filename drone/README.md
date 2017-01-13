### using docker-compose

provide drone env settings in _drone.env_ file for:
- DRONE_GITHUB_CLIENT
- DRONE_GITHUB_SECRET

run: ```docker-compose up``` and navigate to http://localhost.

### to make github webhook work:

- use [ngrok](https://ngrok.com) to expose local drone
- update webhook url to the public one
- make sure webhook payload is set to `application/json`

### to install drone cli:

```
brew tap drone/drone
brew install drone --devel
```

### setup drone cli:

```
export DRONE_SERVER=http://localhost
export DRONE_TOKEN=...
```

check by running `drone info`
