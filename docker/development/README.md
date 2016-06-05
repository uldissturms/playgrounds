Develop applications inside docker using volumes
---
Given a docker image named _development_ (`build.sh`).

And a simple console app that outpouts "I am running".

`console.log('I am running')`

And a docker run script that defines `src` directory as an attached volume to container in `dev.sh` script.

`docker run -v $PWD/src:/src development`

Then content changes to src/app.js file are visible to container and trigger nodemon to restart console app.

Try it!
```
[nodemon] 1.9.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
I am running
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
You are running
[nodemon] clean exit - waiting for changes before restart
```
