const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PensionerDetailSchema = new Schema({
  id: Number,
  Aadhaar: Number, 
  Name: String,
  Dob: String,
  Pan: Number,
  Salary: Number,
  Allowances: Number,
  SelfOrFamily: String, 
  BankName: String,
  BankNumber: Number,
  PublicOrPrivate: String
  },
);

module.exports = PensionerDetail = mongoose.model("pensioner", PensionerDetailSchema);