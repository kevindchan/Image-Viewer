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
    'content-type': 'image/jpeg'
  }

  if (request.url === '/1') {
    fs.readFile('./images/1.jpg', function(err, data) {
      response.writeHead(200, headers);
      response.end(data);
    });
  } else if (request.url === '/2') {
    fs.readFile('./images/2.jpg', function(err, data) {
      response.writeHead(200, headers);
      response.end(data);
    });
  } else if (request.url === '/3') {
    fs.readFile('./images/3.jpg', function(err, data) {
      response.writeHead(200, headers);
      response.end(data);
    });
  } else if (request.url === '/4') {
    fs.readFile('./images/4.jpg', function(err, data) {
      response.writeHead(200, headers);
      response.end(data);
    });
  } else if (request.url === '/5') {
    fs.readFile('./images/5.jpg', function(err, data) {
      response.writeHead(200, headers);
      response.end(data);
    });
  } else {
    response.end('404!');
  }



}

var server = http.createServer(requestHandler);
console.log('Listening on http://127.0.0.1:3000')
server.listen(3000, '127.0.0.1')
