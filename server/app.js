require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./config/db")
const defaultData = require("./default")
const router = require("./routes/route")
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}))
app.use("/",router)

connectToDatabase();

defaultData();

module.exports = app
