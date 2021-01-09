const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("get methods");
});
app.post("/", (req, res) => {
  res.send("post methods");
});
app.put("/", (req, res) => {
  res.send("put methods");
});
app.delete("/", (req, res) => {
  res.send("delete methods");
});

app.listen(3000, () => {
  console.log("服务器已经启动……");
});
