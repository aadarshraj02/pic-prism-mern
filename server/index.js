const express = require("express");
require("dotenv").config();
const { readdirSync } = require("fs");
const { connectDb } = require("./connection");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

connectDb();
app.use(cors({
  origin: process.env.CLIENT_URL,
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<center><h1>Server is running</h1></center>");
});

readdirSync("./routes").map((route) => {
  app.use("/api", require(`./routes/${route}`));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
