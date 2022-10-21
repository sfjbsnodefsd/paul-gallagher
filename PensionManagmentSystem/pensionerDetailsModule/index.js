const express = require('express')
const app = express();
const mongoose = require('mongoose');
//const data = require('../auth-service/data')
//const fs = require('fs')
const csv =require("csvtojson");
const pensionerSchema = require('./pensionerSchema');

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

  
app.get('/pensioner/:Aadhaar', (req, res) => {
  const { Aadhaar } = req.params

  const singlePensioner = pensioners.PensionerDetail.find(
    (pensioner) => pensioner.Aadhaar === Number(Aadhaar)
  )
  if (!singlePensioner) {
    return res.status(404).send('Invalid pensioner detail provided, please provide valid detail.')
  }

  return res.json(singlePensioner)
});

app.listen(5001, (req, res) => {
    console.log('This is your pensioner details service on 5001')

})