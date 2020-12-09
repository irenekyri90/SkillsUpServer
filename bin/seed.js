// bin/seed.js
const mongoose = require("mongoose");
const Workshop = require("./../models/workshop.model");


const workshops = require("./workshops-mock-data");


const DB_NAME = "skills-up-db";

// SEED SEQUENCE

// 0. ESTABLISH CONNECTION TO MONGO DATABASE
mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    // 1. DROP THE DATABASE
    const pr = x.connection.dropDatabase();

    return pr;
  })
  .then(() => {
    // 2.  CREATE THE DOCUMENTS FROM ARRAY OF workshops
    const pr = Workshop.create(workshops);
    return pr; // forwards the promise to next `then`
  })
  .then((createdWorkshops) => {
    console.log(`Created ${createdWorkshops.length} workshops`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));