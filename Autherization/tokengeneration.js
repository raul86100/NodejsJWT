const crypto=require('crypto');
const dotenv = require('dotenv'); 
const upadtetoken=require('./updatetoken')
dotenv.config();
const generate=()=>{
    const objtoken={
        accesstoken:crypto.randomBytes(64).toString('hex'),
        refreshtoken:crypto.randomBytes(64).toString('hex')
    }
    
    upadtetoken(objtoken.accesstoken,objtoken.refreshtoken);
    console.log('Key rotated successfully.');
}

module.exports=generate