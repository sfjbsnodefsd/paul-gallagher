const express =require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3001, (req,res)  => {
    console.log("Your Server is a 3001champion")
})