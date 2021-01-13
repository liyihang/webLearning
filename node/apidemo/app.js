const serverHandle = (req, res) => {
  res.setHeader("Content-type", "application/Json");
  const resData = {
    name: "node",
    version: "13.12",
    env: process.env.NODE_ENV,
  };
  res.end(JSON.stringify(resData));
};
module.exports = serverHandle;
