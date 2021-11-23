const http = require('http');

const server = http.createServer((request, response) => {
  const method = request.method;
  const path = request.url;

  console.log("Someone sent a request:", method, path);

  if (method === "GET" && path === "/info") {
    response.write("This is the Info page");
    response.end();
    return;
  }

  if (method === "GET" && path === "/home") {
    response.write("This is the Home page");
    response.end();
    return;
  }

  response.write("Page not Found:" + path);
  response.end();
});

server.listen(8000, () => {
  console.log("server started");
});