### [docs](https://nodejs.org/en/docs/guides/debugging-getting-started)

A Node.js process started without --inspect can also be instructed to start listening for debugging messages by signaling it with SIGUSR1 (on Linux and OS X). As of Node 7 this activates the legacy Debugger API; in Node 8 and later it will activate the Inspector API.

### debug

* `node --inspect-brk=0.0.0.0 .` - docker
* `node --inspect .` - locally

note: `--inspect-brk` works more reliably with chrome dev tools (v68)

### info

```sh
# curl  http://localhost:9229/json/list
[ {
  "description": "node.js instance",
  "devtoolsFrontendUrl": "chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/bcc3a570-0560-4a24-88ae-b15bd6fa1f82",
  "faviconUrl": "https://nodejs.org/static/favicon.ico",
  "id": "bcc3a570-0560-4a24-88ae-b15bd6fa1f82",
  "title": "index.js",
  "type": "node",
  "url": "file:///Users/uldis/git/playgrounds/node/debug/index.js",
  "webSocketDebuggerUrl": "ws://127.0.0.1:9229/bcc3a570-0560-4a24-88ae-b15bd6fa1f82"
} ]
```


### walkthrough

https://blog.risingstack.com/how-to-debug-a-node-js-app-in-a-docker-container/
