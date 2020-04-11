const express = require("express");
const app = express();

app.use(express.static("./dist/taysir-statement"));

app.all("*", (req, res) => {
  res.status(200).sendFile(__dirname + "/dist/taysir-statement/index.html");
});

app.listen(8080);
