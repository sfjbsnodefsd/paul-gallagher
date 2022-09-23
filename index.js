const express = require("express");
const { default: mongoose } = require("mongoose");
const coursesRouter = require("./routes/courses")


require("dotenv").config();



const app = express();

app.use(coursesRouter);

mongoose.connect("process.env.DB_CONNECTION_URL",() =>{
    console.log("you've done it! connection Successful");
})
app.listen(process.env.PORT,() => {
    console.log("server is starting you can do this");
})