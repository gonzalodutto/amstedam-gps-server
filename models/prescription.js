"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // precription.belongToMany(models.patient);
    }
  }
  prescription.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "prescription",
    }
  );
  return prescription;
};
