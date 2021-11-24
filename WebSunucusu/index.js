const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    res.write("<h2>INDEX sayfasına hoşgeldiniz</h2>");
  }else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    res.write("<h2>Contact sayfasına hoşgeldiniz</h1>");
  }
  else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    res.write("<h2>About sayfasına hoşgeldiniz</h2>");
  }  else {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
    res.write("<h1>404 SAYFA BULUNAMADI</h1>");
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});

