const http = require("http");

function onRequest(req, res) {
  res.writeHead(200, { content_Type: "Text/plain" });
  res.write("Server has started. Hello World");
  res.end();
}
http.createServer(onRequest).listen(8000);
