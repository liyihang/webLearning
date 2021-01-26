const fs = require("fs");
// 创建目录
fs.mkdir("./fs", () => {
  console.log("mkdir");
});
// 重命名
fs.rename("./fs", "./fs-new", () => {
  console.log("rename");
});
// 删除目录
fs.rmdir("./fs", () => {
  console.log("删除目录");
});
// 写文件
fs.writeFileSync("./fs-new/1.log", "heloo", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("写文件成功");
  }
});
fs.writeFile("./fs-new/1.log", "word", () => {
  console.log("写文件成功");
});
// 文件追加

fs.appendFile("./fs-new/1.log", "ge", () => {
  console.log("追加");
});
// 文件读取
fs.readFile('./fs-new/1.log','utf-8',(err,data)=>{
    console.log(data)
})
// 删除文件
fs.unlink('./fs-new/1.log',()=>{
    console.log("删除文件")
})