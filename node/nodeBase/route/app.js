const http = require("http");
const url = require("url");
const app = http.createServer();
app.on("request", (req, res) => {
  // 1.get request method
  const method = req.method.toLowerCase();
  // console.log(method)
  // 2.get url
  const pathname = url.parse(req.url).pathname;
  // console.log(pathname)

  //  setting header
  res.writeHead(200, {
    "content-type": "text/html;charset=utf8",
  });
  if (method === "get") {
    if (pathname == "/" || pathname == "/index") {
      res.end("首页");
    } else if (pathname == "/list") {
      res.end("list page");
    } else {
      res.end("not found");
    }
  }
  if (method === "post") {
  }
});
app.listen(3000, () => {
  console.log("服务器启动成功！~");
});
