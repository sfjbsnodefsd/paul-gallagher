const express = require("express");
const app =  express();
const port = 5000

app.get("/", (req, res) => {
    res.send("hello there, looking fierce well")
})

app.listen (port, () => {
    console.log (`app is listening on joyfullly ${port}`)
})