const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PensionerDetailSchema = new Schema({
  
  
  Aadhaar: { 
    type: Number,
    // required: true 
  },
  Name: { 
    type: String,
    // required: true 
  },
  email: { 
    type: String,
    // required: true 
  },
  password: { 
    type: String,
    // required: true 
  },
  Dob: { 
    type: String,
    // required: true 
  },
  Pan: { 
    type: Number,
    // required: true 
  },
  Salary: { 
    type: Number,
    // required: true 
  },
  Allowances: { 
    type: Number,
    // required: true 
  },
  SelfOrFamily: { 
    type: String,
    // required: true,
    uppercase: true  
  },
  BankName: { 
    type: String,
    // required: true 
  },
  BankNumber: { 
    type: Number,
    // required: true 
  },
  PublicOrPrivate: { 
    type: String,
    // required: true,
    uppercase: true
  }
  },
);

module.exports = PensionerDetail = mongoose.model("pensioner", PensionerDetailSchema);