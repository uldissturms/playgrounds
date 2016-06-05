Develop applications inside docker using volumes
---

`cat src/app.js` - given a simple console app

` >>> console.log('I am running')`

`docker run -v $PWD/src:/src development` - when app is mounted from host directory into container and run:

`>>> I am running`

`echo "console.log('You are running')" > src/app.js` - when app is updated

`docker run -v $PWD/src:/src development` - next run executes updated app.

`>>> You are running`
