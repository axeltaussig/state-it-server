const { Sequelize } = require("sequelize");

const connectDatabase = async () => {
  const sequelize = new Sequelize(
    "postgres://postgres:12345678@localhost:5432/state-it"
  );

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return false;
  }
};

module.exports = {
  connectDatabase,
};
