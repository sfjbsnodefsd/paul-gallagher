const mysql = require('mysql');
const express = require("express")
var app = express()
const bodyparser = require("body-parser")

app.use(bodyparser.json())

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeedb',
    multipleStatements: true
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

//insert an employee
app.post("/addemployees" , (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpID = ?; SET @Name = ?; SET @EmpCode = ?; SET @salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
    mysqlConnection.query(sql,[emp.EmpID, emp.Name, emp.EmpCode, emp.Salary] , (err,rows,fields) => {
        if(!err) rows.forEach(element => {
            if(element.constructor == Array)
            res.send("Employee Id of the inserted employee is : " +element[0].EmpID);
        });
        //    res.send(rows)
         else console.log(err);
    })
});


// update employee 
app.put("/updateemployees" , (req, res) => {
    let emp = req.body;
    var sql = "SET @EmpID = ?; SET @Name = ?; SET @EmpCode = ?; SET @salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
    mysqlConnection.query(sql,[emp.EmpID, emp.Name, emp.EmpCode, emp.Salary] , (err,rows,fields) => {
        if(!err) 
        res.send("Employee updated sucessfully")
        //    res.send(rows)
         else console.log(err);
    })
});


