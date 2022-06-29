//Importing express
const express = require('express')

//Importing Mongoose
const mongoose = require('mongoose')

//Importing port from dotenv file
const Port = process.env.Port

//Using Express
const app = express()

//Connecting to the Database
mongoose.connect(process.env.MONGO_URL, {}, () => {
    console.log("Connected to the Database")
})

//base Route
app.get('/', (req,res) => {
    res.send('We are on the base Route')
})

//starting our server
app.listen(Port, () => {
    console.log(`Server started on port: ${Port}`)
})