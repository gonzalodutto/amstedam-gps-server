"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      doctor.hasMany(models.patient);
    }
  }
  doctor.init(
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      onDuty: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "doctor",
    }
  );
  return doctor;
};
