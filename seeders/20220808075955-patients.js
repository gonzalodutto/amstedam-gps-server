"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "patients",
      [
        {
          // personalId: "5856675843",
          firstName: "Milt",
          lastName: "Rosenbaum",
          gender: "Male",
          dateOfBirth: "15/01/2005",
          email: "mrosenbaum0@fastcompany.com",
          phoneNumber: 3511611605674,
          // prescriptions: ["Lidocaine Viscous"],
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // personalId: "8272482266",
          firstName: "Faydra",
          lastName: "Lief",
          gender: "Female",
          dateOfBirth: "29/09/2003",
          email: "flief1@apache.org",
          phoneNumber: 865039957341,
          // prescriptions: ["Mucinex", "Aspirin"],
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // personalId: "6877351762",
          firstName: "Roxane",
          lastName: "Alflat",
          gender: "Female",
          dateOfBirth: "14/01/2014",
          email: "ralflat2@pcworld.com",
          phoneNumber: 19147310603,
          // prescriptions: [],
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // personalId: "0323339832",
          firstName: "Willy",
          lastName: "Entwisle",
          gender: "Female",
          dateOfBirth: "24/09/1949",
          email: "wentwisle3@reddit.com",
          phoneNumber: 3515506129238,
          // prescriptions: [
          //   "Rich Almond Perfecting Makeup Broad Spectrum SPF 25",
          //   "VITAMIN CREAM",
          //   "NITRO-DUR",
          // ],
          doctorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // personalId: "4772181415",
          firstName: "Bjorn",
          lastName: "Bolgar",
          gender: "Male",
          dateOfBirth: "09/07/1985",
          email: "bbolgar4@wired.com",
          phoneNumber: 73751983116,
          // prescriptions: ["Vanilla Fig Hand Sanitizer"],
          doctorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // personalId: "5942660123",
          firstName: "Ardith",
          lastName: "Kilmartin",
          gender: "Female",
          dateOfBirth: "14/12/1949",
          email: "akilmartin5@google.co.jp",
          phoneNumber: 17733658289,
          // prescriptions: ["NEXIUM", "Clear Defense"],
          doctorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // personalId: "6467006526",
          firstName: "Walt",
          lastName: "Moule",
          gender: "Male",
          dateOfBirth: "12/05/2005",
          email: "wmoule6@businessinsider.com",
          phoneNumber: 9678977548473,
          // prescriptions: [],
          doctorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // personalId: "6906950363",
          firstName: "Fedora",
          lastName: "Johnston",
          gender: "Female",
          dateOfBirth: "27/08/1959",
          email: "fjohnston7@noaa.gov",
          phoneNumber: 5051276997118,
          // prescriptions: ["DELUXE Dish DETERGENT"],
          doctorId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // personalId: "3711892663",
          firstName: "Jo-anne",
          lastName: "Furmonger",
          gender: "Female",
          dateOfBirth: "29/01/1953",
          email: "jfurmonger8@baidu.com",
          phoneNumber: 628265305184,
          // prescriptions: ["Acyclovir", "Palmers Amaranth"],
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // personalId: "9335192813",
          firstName: "Gerome",
          lastName: "Stutte",
          gender: "Male",
          dateOfBirth: "31/05/1984",
          email: "gstutte9@joomla.org",
          phoneNumber: 818554274970,
          // prescriptions: ["Emtriva"],
          doctorId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("patients", null, {});
  },
};
