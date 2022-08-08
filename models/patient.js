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
      patient.belongsTo(models.doctor);
      // patient.belongToMany(models.prescription);
    }
  }
  patient.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      gender: DataTypes.STRING,
      dateOfBirth: DataTypes.STRING,
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      phoneNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "patient",
    }
  );
  return patient;
};
