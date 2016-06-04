Simple demo how environment varibles can be used from docker run command to alter program instructions
---

`docker build -t hello .` - build image.

`docker run hello` - run container.

`>>> Hello, World`

`docker run -e "HELLO=Sun" hello` - run container by passing environment variables for altered program output.

`>>> Hello, Sun`

`docker inspect hello` can be run to verify exactly what commands and from where will be run on build and run.

``` json
...
"Env": [
    "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
    "NPM_CONFIG_LOGLEVEL=info",
    "NODE_VERSION=6.2.0",
    "HELLO=World"
],

"Cmd": [
    "/bin/sh",
    "-c",
    "#(nop) CMD [\"/bin/sh\" \"-c\" \"echo $PWD \u0026\u0026 node app.js\"]"
]
...
```