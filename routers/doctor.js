const Router = require("express").Router;
const Doctor = require("../models").doctor;

const router = new Router();

//get all doctors
//http :4000/doctors
router.get("/", async (request, response, next) => {
  try {
    const doctors = await Doctor.findAll();
    response.send(doctors);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
