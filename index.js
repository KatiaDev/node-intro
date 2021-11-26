const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });

    response.write("<html><body><h1>LPD1921 is the best!!!</h1></body></html>");

    response.end();
  } else if (request.url === "/courses") {
    response.writeHead(200, { "Content-Type": "text/html" });

    response.write("<html><body><h1>Courses</h1></body></html>");

    response.end();
  } else {
    response.end("Invalid response!!");
  }
});

server.listen(1234);

console.log("Server is running on port 1234...");
