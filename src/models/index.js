const { sequelize } = require("../lib/db");

const models = {
  Statement: require("./Statement")(sequelize),
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

module.exports = models;
