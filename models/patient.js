"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  patient.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      gender: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      phoneNumber: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "patient",
    }
  );
  return patient;
};
