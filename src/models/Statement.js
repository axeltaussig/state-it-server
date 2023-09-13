const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  const { fn, DataTypes, Model } = Sequelize;

  class Statement extends Model {
    toSanitisedJson() {
      return {
        id: this.id,
        user: this.user,
        statement: this.statement,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
      };
    }
  }

  Statement.init(
    {
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: fn("NOW"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: fn("NOW"),
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      statement: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      schema: "public",
      tableName: "statements",
      indexes: [
        {
          unique: true,
          fields: ["id"],
        },
      ],
    }
  );

  return Statement;
};
