const express = require("express")
const app = express()
const morgan=require ("morgan")
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const Authroutes = require('./Routes/auth')
const Grouproutes = require('./Routes/group')
const TrialRoutes=require('./Routes/trial')
const cookieparser=require('cookie-parser')
const bodyparser = require("body-parser")
const expressValidator = require('express-validator')
const cors = require('cors')
dotenv.config();

 mongoose.connect(process.env.API_URL,{useNewUrlParser: true, useUnifiedTopology: true})
     .then(() => {
     console.log("DB Connected Successfully!")
    })
mongoose.connection.on("error", err => {
    console.log("Connection Error")
})
app.use(cors())
app.use(expressValidator());
app.use(morgan('dev'))
app.use(bodyparser.json())
app.use(cookieparser())
app.use('/', Authroutes)
app.use('/', Grouproutes)
app.use('/', TrialRoutes)

const port = process.env.PORT
app.listen(port, () => {
    console.log("Listening bro !")
});
