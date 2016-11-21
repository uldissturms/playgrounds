# using docker-compose

Provide drone env settings in _drone.env_ file for:
- REMOTE_DRIVER
- REMOTE_CONFIG
- DATABASE_DRIVER
- DATABASE_CONFIG

```docker-compose up```

# using docker
## get drone
```docker pull drone/drone```

## get gogs
```docker pull gogs/gogs```

## run drone
```
docker run \
        --volume /var/lib/drone:/var/lib/drone \
        --volume /var/run/docker.sock:/var/run/docker.sock \
        --env-file /etc/drone/dronerc \
        --restart=always \
        --publish=80:8000 \
        --detach=true \
        --name=drone \
        drone/drone:0.4
```
## run gogs
```
docker run --name=gogs -p 10022:22 -p 10080:3000 -v /var/gogs:/data gogs/gogs
```

# additional setup

local hosts entry drone.${name}.com might be necessary when specifying github.com as remote so that it can redirect back after authentication.

# testing locally
## setup
```
brew tap drone/drone
brew install drone
```

## run
```
drone exec
```

## sample output:
```
[DRONE] starting job #1
$ npm start
npm info it worked if it ends with ok
npm info using npm@3.10.8
npm info using node@v7.0.0
npm info lifecycle drone-test-gogs@1.0.0~prestart: drone-test-gogs@1.0.0
npm info lifecycle drone-test-gogs@1.0.0~start: drone-test-gogs@1.0.0

> drone-test-gogs@1.0.0 start /drone/src
> node index.js

==============================================================
drone gogs test...
==============================================================
npm info lifecycle drone-test-gogs@1.0.0~poststart: drone-test-gogs@1.0.0
npm info ok
[DRONE] finished job #1
[DRONE] exit code 0
[DRONE] job #1 passed
[DRONE] build passed
```

more info [here](http://readme.drone.io/usage/overview/)
