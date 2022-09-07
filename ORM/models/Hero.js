const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Hero extends Model {}

Hero.init(
  {
    // Manually define the primary key

    //hero_id: INTERGER AUTO_INCREMENT PRIMARY KEY
    hero_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    //heroName VARCHAR(MAX)
    heroName: {
      type: DataTypes.STRING
    },
    //heroClass VARCHAR(MAX)
    heroClass: {
      type: DataTypes.STRING
    },
    //is_alive BOOLEAN
    is_alive: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: "hero"
  }
);

module.exports = Hero;
