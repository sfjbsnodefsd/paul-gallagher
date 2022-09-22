const mysql = require('mysql');
const express = require("express")
var app = express()
const bodyparser = require("body-parser")

app.use(bodyparser.json())

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeedb'
})
mysqlConnection.connect((err) => {
    if (!err){
        console.log("successful connection")

    }
    else console.log("DB failed" + JSON.stringify(err, undefined, 2))
})

app.listen(3000,() => console.log("running express server on port 3000"))

// get all employees
app.get('/getemployees',(res, req) =>{
    mysqlConnection.query("select * from Employee", (err, rows, fields) =>{
        if(!err) {
            res.send(rows)

        }else console.log(err)
    })
})

// get all employees by id
app.get('/getemployees/:id',(res,req) =>{
    mysqlConnection.query("select * from Employee where EmpID = ?",[req.params.id],(err,rows,fields) =>{
        if(!err) {
            res.send(rows)

        }else console.log(err)

    })
})

//delete employee by id
app.delete('/deleteemployees/:id',(req,res) =>{
    mysqlConnection.query("DELETE FROM Employee WHERE EmpID = ?",[req.params.id],(err,rows,fields) =>{
        if(!err) {
           res.send("Deleted success")
        }else console.log(err)

    })
})
app.post('/addemployees',(req,res) => {
    var sql = "SET @EmpID = ?; SET @Name = ?; SET @EmpCode = ?; SET @salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@salary);";
    mysqlConnection.query(sql,[emp.EmpID, emp.Name, emp.EmpCode, emp.salary], [req.params.id],(err,rows,fields) =>{
        if(!err) {
           res.send(rows);
        }else console.log(err)

    })
})
