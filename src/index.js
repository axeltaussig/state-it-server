// Importing libraries
const express = require("express");
const { connectDatabase } = require("./lib/db");
const bodyParser = require("body-parser");
const { Statement } = require("./models/Statement");

// Create Express App
const app = express();
const port = 5000;

// Adding body to req object (req.body)
app.use(bodyParser.json());

// Connect to Postgres
if (connectDatabase()) console.log("Postgres OK");
else console.log("Postgres ERROR");

app.post("/pushStatement", async (req, res) => {
  // Ir a la base de datos y recuperar una historia random
  const { user, statement } = req.body;

  // Validate data (homework)

  // Validate user and statement / ERROR MESSAGE

  // Save statement in database
  let document;
  try {
    document = await Statement.create({
      id: 1,
      user: user,
      statement,
    });
  } catch (error) {
    res.send({
      status: 500,
      error,
      message: "There was a problem saving to the database",
    });
    return;
  }

  res.send({
    status: 200,
    statement: document,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
