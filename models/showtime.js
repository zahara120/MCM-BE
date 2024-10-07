"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Showtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Showtime.belongsTo(models.Film, {
        foreignKey: "filmId",
      });
      Showtime.belongsTo(models.Studio, {
        foreignKey: "studioId",
      });
      Showtime.hasMany(models.Ticket, {
        foreignKey: "showtimeId",
      });
    }
  }
  Showtime.init(
    {
      filmId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Film is required",
          },
          notEmpty: {
            msg: "Film is required",
          },
        },
      },
      studioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Studio Id is required",
          },
          notEmpty: {
            msg: "Studio Id is required",
          },
        },
      },
      showTime: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Show Time is required",
          },
          notEmpty: {
            msg: "Show Time is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Showtime",
    }
  );
  return Showtime;
};
