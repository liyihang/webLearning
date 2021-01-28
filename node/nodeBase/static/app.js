const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const app = http.createServer();
app.on("request", (req, res) => {
  // get url pathname
  let pathname = url.parse(req.url).pathname;
  pathname = (pathname == "/" ? "/default.html" : pathname);
  // get real pathname
  const realurl = path.join(__dirname, "public" + pathname);
  //   read file
  fs.readFile(realurl, (err, data) => {
    if (err != null) {
      res.writeHead(404, {
        "content-type": "text/html;charset=utf8",
      });
      res.end("文件错误❌");
    }
    res.end(data);
  });
});
app.listen(3000, () => {
  console.log("serve is running on port 3000");
});
