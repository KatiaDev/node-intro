const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });

    response.write("<html><body><h1>LPD1921 is the best!!!</h1></body></html>");

    response.end();
  }
});

server.listen(1234);

console.log("Server is running on port 1234...");
