const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pensionerSchema = require('../pensionerDetailsModule/pensionerSchema');
const csv = require('csvtojson');
const isAuthenticated = require("../isAuthenticated");
const request = require("request");
const bodyParser = require("body-parser")
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
/*app.post("/ProcessPension/:aadhaar", async (req, res) => {
  const  aadhaar  = req.params.aadhaar;
  console.log(`This is your ${aadhaar}`);*/
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

returnPension = async (req, res) => {
    try {
        const pensioner = await getPensionDetails(aadhaar)
        const { Salary, Allowances, SelfOrFamily, PublicOrPrivate } = pensioner;
        const percentage = getPercentage(SelfOrFamily);
        console.log(SelfOrFamily)

        const _pensionAmount = (percentage * Salary) + Allowances;
        const _serviceCharge = getServiceCharge(PublicOrPrivate);
        //return result
        res.status(200).json(
            console.log(_pensionAmount),
            console.log(_serviceCharge)
        );



    } catch (err) {
        throw err;
    }

}

app.post("/ProcessPension/:aadhaar", async (req, res) => {
    const aadhaar = req.params.aadhaar;
    console.log(`This is your ${aadhaar}`)
    const pensionerDetails = await getPensionDetails(aadhaar)
    const personName = pensionerDetails.Name;
    const { Salary, Allowances, SelfOrFamily, PublicOrPrivate } = pensionerDetails;
    const percentage = getPercentage(SelfOrFamily);
    console.log(SelfOrFamily)

    const _pensionAmount = (percentage * Salary) + Allowances;
    const _serviceCharge = getServiceCharge(PublicOrPrivate);
    //return result
    console.log(_pensionAmount)
    res.status(200).json(
        { pension: _pensionAmount, Bank: _serviceCharge, Person: pensionerDetails }

    );
    console.log(personName)
    //console.log(pensionerDetails)


})






const getPensionDetails = (aadhaar) => {

    return new Promise((resolve, reject) => {
        try {

            const url = `http://localhost:5001/pensioner/${aadhaar}`
            request.get(url, { json: true }, (err, result, body) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else
                    resolve(body);
            });
        } catch (err) {
            console.log(err);
            reject(err);
        }

    });
};
const getPercentage = (SelfOrFamily) => {
    var percentage = 0;
    if (SelfOrFamily !== null) {
        switch (SelfOrFamily) {
            case "Self":
                percentage = .80;
                break;
            case "Family":
                percentage = .50;
                break;

        }
    }
    return percentage;
}

const getServiceCharge = (PublicOrPrivate) => {
    var serviceCharge = null;
    if (PublicOrPrivate) {
        switch (PublicOrPrivate.toString().toUpperCase()) {
            case "PRIVATE":
                serviceCharge = 550;
                break;
            case "PUBLIC":
                serviceCharge = 500;
                break;


        }

    }
    return serviceCharge;
}



app.listen(5006, (req, res) => {
    console.log('This is your Pension-Process service on 5006')
});