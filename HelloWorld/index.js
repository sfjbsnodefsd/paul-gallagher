const express = require("express");
const app = express();


app.get("/", (req, res) => {
    console.log("your app is running on a container")
})
app.listen(3000, () => {
    console.log("Server running on 3000")
})