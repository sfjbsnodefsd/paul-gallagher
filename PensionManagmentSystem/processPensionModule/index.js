const express = require('express')
const app = express();
const mongoose = require('mongoose');

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
  
  app.get('/', (req, res) => {
    res.send('homePage')
  })
  
 
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
  
  app.get('/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
  })
  app.get("/pensioner/:aadhaar", async (req, res) => {
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