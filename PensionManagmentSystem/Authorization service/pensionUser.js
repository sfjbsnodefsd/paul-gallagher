const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    id: Number,
    Aadhaar: Number,
    Name: String,
    DOB: String,
    PAN: String,
    SalaryEarned: Number,
    Allowences: String,
    SelforFamilyPension: String,
    Bank: String,
    AccountNumber: Number,
    PublicorPrivateBank: String

}); 

module.exports = User = mongoose.model("user", UserSchema);
