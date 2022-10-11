const express = require('express');
const app = express();
const {pensionDetails} = require('./data')
const jwt = require("jsonwebtoken");


app.get('/', (req, res) => {
    res.send('Welcome to the Jungle')
  })
// needs to be edited to retireve pension details from adhaar number.
app.get('/api/pensionDetails', (req, res) => {
    const newPensionDetails = pensionDetails.map((pensionDetail) => {
        const{
            id, 
            aadhaarNum, name, DOB, PAN, SalaryEarned, Allowences,
        SelforFamilyPension} = pensionDetail
        return {id,aadhaarNum, name, DOB, PAN, SalaryEarned, Allowences,
            SelforFamilyPension}
    })
    res.json(newPensionDetails)
})

app.post('/api/login', (req, res) => {
    const user ={aadhaarNum: 999991}
    const token = jwt.sign(user, "secret_token")
    res.json({
        token: token
    })
    
})




app.listen(5009, () => {
console.log('You can do this, be relentless')
})