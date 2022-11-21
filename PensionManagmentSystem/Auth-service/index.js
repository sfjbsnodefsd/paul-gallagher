const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
const pensionerSchema = require("./Model");
//const pensionerSchema = require('../processPensionModule/Model');
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors")
const bcrypt = require("bcrypt")


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
//app.use(express.static())
app.use(bodyParser.json());
app.use(
  express.urlencoded({ extended: true })
);
  


app.use(cors({origin: 'http://localhost:4200'}))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
})


mongoose.connect(
  "mongodb://localhost:27017/pensioner-details",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`pension DB  Connected`);
  }
);


app.post("/auth/reg", async (req, res) => {
  const {  Aadhaar, Name, email, password, Dob, Pan, Salary, Allowances, SelfOrFamily, BankName, BankNumber, PublicOrPrivate  } = req.body;
 
  const pensionerExists = await pensionerSchema.findOne({ Aadhaar });
  if (pensionerExists) {
    return res.json({ sucess: 0, message: "User already exists" });
  } else {
    const newPensioner = new PensionerDetail({
      
       Aadhaar: req.body.Aadhaar, 
       Name: req.body.Name,
       email: req.body.email, 
       password: req.body.password,
       Dob: req.body.Dob, 
       Pan: req.body.Pan, 
       Salary: req.body.Salary, 
       Allowances: req.body.Allowances, 
       SelfOrFamily: req.body.SelfOrFamily, 
       BankName: req.body.BankName, 
       BankNumber: req.body.BankNumber, 
       PublicOrPrivate: req.body.PublicOrPrivate 
    });
    newPensioner.save();
    return res.json(newPensioner);
  }
});



app.post("/auth/login", async (req, res) => {
  const {  Aadhaar, Name, email, password, Dob, Pan, Salary, Allowances, SelfOrFamily, BankName, BankNumber, PublicOrPrivate} = req.body;

  const user = await pensionerSchema.findOne({ Aadhaar });
  if (!user) {
    return res.json({ sucess: 0, message: "User does not exist" });
  } else {
    if (password !== user.password) {
      return res.json({ sucess: 0, message: "Incorrect password" });
    }
    const payload = {
      email,
      name: user.Name,
    };
    jwt.sign(payload, "secret", (err, token) => {
      if (err) console.log(err);
      else {
        return res.json({ token: token });
      }
    });
  }
});


app.listen(PORT, () => {
  console.log(`pension-auth running joyfully at ${PORT}`);
});