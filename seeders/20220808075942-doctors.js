"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "doctors",
      [
        {
          id: 1,
          name: "Dr. Coventry",
          email: "ecoventry@amspractice.nl",
          onDuty: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Dr. Adenet",
          email: "radenet@amspractice.nl",
          onDuty: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Dr. Tollady",
          email: "atollady@amspractice.nl",
          onDuty: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("doctors", null, {});
  },
};
