const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Statement = sequelize.define("Statement", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
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
console.log(Statement === sequelize.models.Statement); // true

module.exports = {
  Statement,
};
