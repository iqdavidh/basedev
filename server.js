var fs = require("fs");
var http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  let path = "index.html";

  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    path = "index.html";

  } else if (  req.url.indexOf("/styles/site.css"===0)) {
    res.writeHead(200, { "Content-Type": "text/css" });
    path = "styles/site.css";

  } else if (req.url.indexOf("/scripts/app.js")===0) {
    res.writeHead(200, { "Content-Type": "aplication/js" });
    path = "scripts/app.js";

  }

  let html = fs.readFileSync("./public/" + path);

  res.write(html);
  res.end();
});

server.listen(3000);
