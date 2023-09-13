const { Sequelize } = require("sequelize");

// Research how to obtain values from .env using dotenv library

let sequelize = new Sequelize(
  "postgres://postgres:12345678@localhost:5432/state-it"
);

module.exports = {
  sequelize,
  //connectDatabase,
};
