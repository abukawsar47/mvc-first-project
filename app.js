const express = require('express');
const cors = require('cors');
require("./config/db")

const userRoute = require('./routes/user.route');

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//api/users/:GET
app.use("/api/users", userRoute)

//api/users/:GET
//api/users/:id:GET
//api/users/:POST
//api/users/:id:PATCH
//api/users/:id:DELETE

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html")
})

//route not found
app.use((req, res, next) => {
    res.status(404).json({
        message: "404 route not found"
    })
})

//server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "500 something brocken"
    })
})

module.exports = app;

