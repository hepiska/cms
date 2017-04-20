let express = require('express');
require('dotenv').config();
let bodyParser = require('body-parser');
let cors = require ('cors');
let mongoose = require('mongoose')
let app = express()
let api = require ('./routers/api')
mongoose.connect(process.env.MONGOOSEDB)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/api',api)

app.listen(process.env.PORT)
