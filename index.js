const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
// const authRouter = require("./routers/auth");
const patiensRouter = require("./routers/patient");
const doctorsRouter = require("./routers/doctor");
const categoriesRouter = require("./routers/category");
const reviewsRouter = require("./routers/review");

app.use(express.json());
app.use(cors());

// Routers
// app.use("/auth", authRouter);
app.use("/categories", categoriesRouter);
app.use("/patients", patiensRouter);
app.use("/doctors", doctorsRouter);
app.use("/reviews", reviewsRouter);

app.listen(PORT, () =>
  console.log(`Amsterdam GP server started in port: ${PORT}. Hola amig@! :)`)
);
