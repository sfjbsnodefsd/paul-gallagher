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


app.post("/auth/reg", async (req, res, next) => {
  
  const {  Aadhaar, Name, email, password, Dob, Pan, Salary, Allowances, SelfOrFamily, BankName, BankNumber, PublicOrPrivate  } = req.body;
 
  const pensionerExists = await pensionerSchema.findOne({ Aadhaar });
  if (pensionerExists) {
    return res.json({ sucess: 0, message: "User already exists" });
  } else {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds);
    bcrypt.hash(req.body.password, saltRounds)
  .then(hash => {
   
  const newPensioner = new pensionerSchema({
      
       Aadhaar: req.body.Aadhaar, 
       Name: req.body.Name,
       email: req.body.email, 
       password: hash,
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
    return res.json(newPensioner, {message : message, error: err})
    ;
});
  }
});



app.post("/auth/login", (req, res, next) => {
  let fetchedUser;
  pensionerSchema.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      });
    });
});


  

app.listen(PORT, () => {
  console.log(`pension-auth running joyfully at ${PORT}`);
});
