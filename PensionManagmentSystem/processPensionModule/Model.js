const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PensionerDetailSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  Aadhaar: { 
    type: Number,
    required: true 
  },
  Name: { 
    type: String,
    required: true 
  },
  Dob: { 
    type: String,
    required: true 
  },
  Pan: { 
    type: Number,
    required: true 
  },
  Salary: { 
    type: Number,
    required: true 
  },
  Allowances: { 
    type: Number,
    required: true 
  },
  SelfOrFamily: { 
    type: String,
    required: true 
  },
  BankName: { 
    type: String,
    required: true 
  },
  BankNumber: { 
    type: Number,
    required: true 
  },
  PublicOrPrivate: { 
    type: String,
    required: true 
  }
  },
);

module.exports = PensionerDetail = mongoose.model("pensioner", PensionerDetailSchema);