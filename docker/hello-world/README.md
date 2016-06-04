Simple demo how environment varibles can be used from docker run command to alter program instructions
---

`docker build -t hello .` - build image

`docker run hello` - run container

`>>> Hello, World`

`docker run -e "HELLO=Sun" hello` - run container by passing environment variables for altered program output

`>>> Hello, Sun`
