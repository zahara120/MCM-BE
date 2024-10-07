"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Film.belongsTo(models.Studio, {
        foreignKey: "studioId",
        as: "studio",
      });

      Film.hasMany(models.Showtime, {
        foreignKey: "filmId",
      });
    }
  }
  Film.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title is required",
          },
          notEmpty: {
            msg: "Title is required",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description is required",
          },
          notEmpty: {
            msg: "Description is required",
          },
        },
      },
      releaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Release Date is required",
          },
          notEmpty: {
            msg: "Release Date is required",
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
    },
    {
      sequelize,
      modelName: "Film",
    }
  );
  return Film;
};
