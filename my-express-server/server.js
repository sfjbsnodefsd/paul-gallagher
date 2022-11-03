const express = require("express");
const app = express();

app.get("/", (req, res) => {
   res.send("<h1>your an animal</h1>")
})

app.get("/contact", (req, res) => {
    res.send("Contact me @ Paulyg123@gmail.com")
});

app.get("/about", (req, res) => {
    res.send("Im a human Turkey")
});
app.listen(3000, (req, res) => {
    console.log("Server is running happily on Port 3000")
});