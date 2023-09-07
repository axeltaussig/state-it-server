const express = require("express");
const { connectDatabase } = require("./lib/db");

// Create Express App
const app = express();
const port = 5000;

// Connect to Postgres
if (connectDatabase()) console.log("OK");
else console.log("NO OK");

app.post("/pushStatement", (req, res) => {
  // Ir a la base de datos y recuperar una historia random
  const { user, statement } = req.body;
  console.log(user, statement);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
