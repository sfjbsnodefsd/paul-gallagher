const express = require('express')
const app = express();
const mongoose = require('mongoose');
const pensionerSchema = require('../pensionerDetailsModule/pensionerSchema');
const csv = require('csvtojson')
const isAuthenticated = require("../isAuthenticated")
app.use(express.json());


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
  
  const  createPension = (pensioners, aadhaar) => {
    let newPensionAmmount = 0;
    //let bankServiceCharge = 0;
    
    //for(t=0; t<pensioners.length; ++t) {
        if(pensioners[0].SelfOrFamily=="self"){
            newPensionAmmount = ((pensioners[0].Salary + pensioners[0].Allowances)*.8);
        }
        else if (pensioners[0].SelfOrFamily=="family"){
            newPensionAmmount=((pensioners[0].Salary + pensioners[0].Allowances)*.5);
        }
        
        if(pensioners[0].bank_detail.PublicOrPrivate=="public") {
            bankServiceCharge = 500;
        }
        else {
            bankServiceCharge = 550;
        }
        const newPension = new Pensioner({
            pensioners,
            //user: aadhaar,
            pensionAmmount:newPensionAmmount,
            bankServiceCharge:500
        });
        updatedPension = newPensionAmmount;

        newPension.save();
        return newPension;

    }
  
  
 
  /*app.get('/pensioner/:Aadhaar', (req, res) => {
    const { Aadhaar } = req.params
  
    const singlePensioner = data.PensionerDetail.find(
      (User) => User.Aadhaar === Number(Aadhaar)
    )
    if (!singlePensioner) {
      return res.status(404).send('Invalid pensioner detail provided, please provide valid detail.')
    }
  
    return res.json(singlePensioner)
  }) */
  
 app.get("/pensioner/:Aadhaar",isAuthenticated, async (req, res) => {
  const aadhaar = req.params.aadhaar;

  try {
    const pensioner = await pensionerSchema.findOne({ Aadhaar: aadhaar }, req.body);
    if (!pensioner) {
      return res.status(404).send('Invalid pensioner detail provided, please provide valid detail.')
    }
    res.json(pensioner);

  } catch (err) {
    return res.json(err)
  }
}); 





app.listen(5006, (req, res) => {
    console.log('This is your Pension-Process service on 5006')

})