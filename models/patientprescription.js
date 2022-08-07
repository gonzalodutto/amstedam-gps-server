"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PatientPrescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patientPrescription.belongsTo(models.patient);
      patientPrescription.belongsTo(models.prescription);
    }
  }
  PatientPrescription.init(
    {
      patientId: DataTypes.INTEGER,
      prescriptionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PatientPrescription",
    }
  );
  return PatientPrescription;
};
