require("dotenv").config();
const mongoose = require("mongoose");

const DB_URL = process.env.MONGO_URL;

const connection = mongoose.connect(DB_URL);
connection
.then(() =>{ console.log("DB Connected Successfully!")})
.catch((err) =>{ console.log("MongoDB Connection Failed!")});

module.exports = {connection};