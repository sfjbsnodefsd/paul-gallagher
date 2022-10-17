const express = require('express')
const app = express();
const mongoose = require('mongoose');
const data = require('./data')


mongoose.connect(
    "mongodb://localhost:27017/pension-auth",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log(`pension-auth DB is Connected`);
    }
  );
  
  app.get('/', (req, res) => {
    res.send('homePage')
  })
  
 /*
  app.get('/api/pensioner/:Aadhaar', (req, res) => {
    const { Aadhaar } = req.params
  
    const singlePensioner = data.pensioner_details.find(
      (pensioner) => pensioner.Aadhaar === Number(Aadhaar)
    )
    if (!singlePensioner) {
      return res.status(404).send('Invalid pensioner detail provided, please provide valid detail.')
    }
  
    return res.json(singlePensioner)
  })
  
  app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
  })
*/





app.listen(5000, (req, res) => {
    console.log('This is your Auth service on 5000')

})