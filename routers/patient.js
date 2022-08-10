const Router = require("express").Router;
const Patient = require("../models").patient;
const Review = require("../models").review;

const router = new Router();

//get all patients
//http :4000/patients
router.get("/", async (request, response, next) => {
  try {
    const patients = await Patient.findAll();
    response.send(patients);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//get one patient by :id with params
//http :4000/patients/3
router.get("/:id", async (req, res, next) => {
  try {
    // 1. req.params.id;
    const patientId = req.params.id;
    // 2. findByPk => id
    const thePatient = await Patient.findByPk(patientId, { include: Review });
    res.send(thePatient);
  } catch (e) {
    next(e);
  }
});

// http POST :4000/patients/signup firstName="Gonzalo" lastName="Dutto" gender=Male dateOfBirth=26-10-1985 email=g@g.com phoneNumber=13546795126
// http POST :4000/patients/signup name="Miriam" email=m@m.com password=miriam
router.post("/signup", async (req, res, next) => {
  try {
    const { firstName, lastName, gender, dateOfBirth, email, phoneNumber } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !dateOfBirth ||
      !email ||
      !phoneNumber
    ) {
      res.status(400).send("Missing some parameters or password invalid.");
      res
        .status(400)
        .send({ message: "Missing some parameters or password invalid." });
    } else {
      const newPatient = await Patient.create({
        firstName,
        lastName,
        gender,
        dateOfBirth,
        email,
        phoneNumber,
      });
      res.json(newPatient);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;

// Adding-new-review-table

// firstName: DataTypes.STRING,
//       lastName: DataTypes.STRING,
//       gender: DataTypes.STRING,
//       dateOfBirth: DataTypes.STRING,
//       email: { type: DataTypes.STRING, allowNull: false, unique: true },
//       phoneNumber: DataTypes.STRING,
