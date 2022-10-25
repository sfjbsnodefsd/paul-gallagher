const express = require('express')
const app = express();
const mongoose = require('mongoose');
const pensionerSchema = require('./pensionerSchema');
const csvtojson = require('csvtojson')


mongoose.connect(
    "mongodb://localhost:27017/pension-process",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log(`pension-process DB is Connected`);
    }
  );
  

  
  
 
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
  

  app.post("/pensioner/:aadhaar", async (req, res) => {
    const aadhaar = req.params.aadhaar;
  
    try {
      const pensioners = await pensionerSchema.findOne({ Aadhaar: aadhaar }, req.body);
      if (!pensioners) {
        return res.status(404).send('Invalid pensioner detail provided, please provide valid detail.')
      }
      res.json(pensioners);
    } catch (err) {
      return res.json(err)
    }
  });





app.listen(5006, (req, res) => {
    console.log('This is your Pension-Process service on 5006')

})