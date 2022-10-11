var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "process_pension"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


var sql = "INSERT INTO pensioner_details (id, aadhaarNum, name, DOB, PAN, SalaryEarned, Allowences, SelforFamilyPension) VALUES ( 3, '999993','Sammy Newark','23051964', '1234467', '60000', 'NA', 'Family')";
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
});  
module.exports ={ mysql }