const express = require('express');
const dotenv = require('dotenv'); 
const userroutes = require('./src/userinfo/routes');
var bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const jwt = require('jsonwebtoken');
const { CronJob } = require('cron');

const generatetoken=require('./Autherization/tokengeneration');

dotenv.config(); 
const port = 5050;
const keyRotationJob = new CronJob('0 0 * * *',generatetoken , null, true, 'UTC');
keyRotationJob.start();
app.use(express.json());
app.use(bodyParser.json())

app.use(cors())
app.use("/user/", userroutes);

app.listen(port, () => { console.log(`IT is worked succefully ${port}`); })