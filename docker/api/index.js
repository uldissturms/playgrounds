const http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World\n')
});

server.listen(process.env.PORT || 3000, process.env.HOST || '0.0.0.0')

console.log('Server started')
