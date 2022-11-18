const express = require('express');
const app = express();
const mongoose = require('mongoose');
const csv = require("csvtojson");
const pensionerSchema = require('./pensionerSchema');
var cors = require('cors') //enabled cors for ports
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(
  express.urlencoded({ extended: true })
);
  
app.use(express.json());

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
    console.log(`pensioner-details DB is Connected`);
  }
);

csv()
  .fromFile("./Data/details.csv")
  .then(async (response) => {
    //console.log(response);

    for (var x = 0; x < response.length; x++) {

      //check whether pensioner details already added
      const pensioner = await PensionerDetail.findOne({ Aadhaar: response[x].Aadhaar });
      if (pensioner) //if exists , continue processing next from for loop
        continue;

      const importPensionerDetail = new PensionerDetail({
        id: response[x].id,
        Aadhaar: response[x].Aadhaar,
        Name: response[x].Name,
        Dob: response[x].Dob,
        Pan: response[x].Pan,
        Salary: response[x].Salary,
        Allowances: response[x].Allowances,
        SelfOrFamily: response[x].SelfOrFamily,
        BankName: response[x].BankName,
        BankNumber: response[x].BankNumber,
        PublicOrPrivate: response[x].PublicOrPrivate
      },
      );

      importPensionerDetail.save();  //save pensioner details using PensionerDetail schema object

    }

  })
app.get("/pensioner/:aadhaar", async (req, res) => {
  const aadhaar = req.params.aadhaar;

  try {
    const pensioner = await pensionerSchema.findOne({ Aadhaar: aadhaar }, req.body);
    if (!pensioner) {
      return res.status(404).send('Invalid pensioner detail provided, please provide valid detail.')
    }
    console.log(pensioner)
    res.json(pensioner);

  } catch (err) {
    return res.json(err)
  }
}); 

app.get("/pensioner", async (req, res) => {
 

  try {
    const pensioner = await pensionerSchema.find({ }, req.body);
    if (!pensioner) {
      return res.status(404).send('Invalid pensioner detail provided, please provide valid detail.')
    }
    console.log(pensioner)
    res.json(pensioner);

  } catch (err) {
    return res.json(err)
  }
}); 






app.listen(5001, (req, res) => {
  console.log('This is your pensioner details service on 5001')

}) 