const express = require("express");
require("dotenv").config();
const { readdirSync } = require("fs");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<center><h1>Server is running</h1></center>");
});

readdirSync("./routes").map((route) => {
  app.use("/api", require(`./routes/${route}`));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
