const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Statement = sequelize.define("Statement", {
  // Model attributes are defined here
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  statement: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// `sequelize.define` also returns the model
console.log(Statement === sequelize.models.User); // true
