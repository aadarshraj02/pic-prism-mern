const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("<center><h1>Server is running</h1></center>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
