const http = require('http');

const server = http.createServer((request, response) => {
  const method = request.method;
  const url = request.url;

  console.log("Someone sent a request:", method, url);
});

server.listen(8000, () => {
  console.log("server started");
});