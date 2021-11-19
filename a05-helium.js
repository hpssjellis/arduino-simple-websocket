const http = require("http");

const hostname = "0.0.0.0";
const port = 8080;
var oldChunk = "Hello World";

const server = http.createServer((req, res) => {
  console.log(`\n${req.method} ${req.url}`);
  console.log(req.headers);

  req.on("data", function(chunk) {
    console.log("BODY: " + chunk);
    //oldChunk = chunk.toString('ascii');
    let data = JSON.parse(chunk)
    oldChunk = JSON.stringify(data.payload)
  });
  
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(oldChunk);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
