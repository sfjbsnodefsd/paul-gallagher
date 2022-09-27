const { pluralize } = require("mongoose")
const pool = require("../../config/database")





module.exports = {
     // if we get error it will be passed as data and callback will be null
     //if execution is successful then callback will have data
     create:(data, callback) => {
     poll.query(
        `insert into registration(firstname, lastName, gender, email, password, number
            values(?,?,?,?,?,?)`,
            [ 
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,

            ],
            (error, result, fields) => {
                if (error){
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
};