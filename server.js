const express = require("express");
const app = express();

app.use(express.static("./dist/taysir-statement"));

app.all("/*", (req, res) => {
  res.status(200).sendFile("index.html", { root: "dist/taysir-statement" });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening on port 8080");
});
