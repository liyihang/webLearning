const http = require("http");
http
  .createServer((req, res) => {
      res.end('123')
  })
  .listen(80, () => {
    console.log("监听80端口" +process.env.NODE_ENV);
  });
