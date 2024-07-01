const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config()
const {errorMiddleware} = require('./middleware/errorMiddleware')

//Express App Initialized
const app = express();
const PORT = process.env.PORT || 4000

//Middlewares
app.use(express.json());

//Client Serving Statically
app.use(express.static(path.join(__dirname, "client", "dist")))

//Serving assets Statically
// app.use("/assets",express.static(path.join(__dirname, "public")))

//Sending Frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,  "client", "dist", "index.html"))
})

//Global Err Handler
app.use(errorMiddleware)

//Server initialization
app.listen(PORT,  () => {
    console.log("Server is running on PORT ", PORT);
})

