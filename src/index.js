// Importing libraries
const express = require("express");
//const { connectDatabase } = require("./lib/db");
const bodyParser = require("body-parser");
const models = require("./models");
const cors = require("cors");

// Create Express App
const app = express();
const port = 5000;

// Enable CORS
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.options("*", cors());

// Adding body to req object (req.body)
app.use(bodyParser.json());

// Endpoint to push an statement to the db
app.post("/pushStatement", async (req, res) => {
  // Ir a la base de datos y recuperar una historia random
  const { user, statement } = req.body;

  // Validate data (homework)

  // Validate user and statement / ERROR MESSAGE

  // Save statement in database
  let document;
  try {
    document = await models.Statement.create({
      user,
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

// Endpoint to get a statement from the db
app.get("/getStatement", async (req, res) => {
  // Ir a la base de datos y recuperar una historia random
  const { id } = req.query;

  // Validate data (homework)

  // Validate id / ERROR MESSAGE

  // Get statement from database
  let document;
  try {
    document = await models.Statement.findAll({
      where: {
        id: id,
      },
    });
  } catch (error) {
    res.send({
      status: 500,
      error,
      message: "There was a problem getting the statement from the database",
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
