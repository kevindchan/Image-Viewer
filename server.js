var Promise = require('bluebird');
var http = require('http');
var fs = Promise.promisifyAll(require('fs'));

var requestHandler = function(request, response) {


  // Render the request method and url in the console
  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  var headers = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10,
    'content-type': 'text/html'
  }

  if (request.url === '/hello') {
    fs.readFile('./hello.html', 'utf8', function(err, data) {
      response.writeHead(200, headers);
      response.end(data);
    });
  }

  // else if (request.url === '/goodbye') {
  //   var html = fs.readFileSync('./goodbye.html');
  //   response.writeHead(200, headers);
  //   response.end(html);
  // } else if (request.url === '/' || request.url === '/index') {
  //   var html = fs.readFileSync('./index.html');
  //   response.writeHead(200, headers);
  //   response.end(html);
  // } else {
  //   response.writeHead(404);
  // }



}

var server = http.createServer(requestHandler);
console.log('Listening on http://127.0.0.1:3000')
server.listen(3000, '127.0.0.1')
