const jwt=require('jsonwebtoken');
const dotenv = require('dotenv'); 
dotenv.config();

const Autherization=(req,res,next)=>{
    const authheader=req.headers["authorization"];
    const token=authheader && authheader.split(' ')[1];
    if(token===null){
        return  res.status(401).send('token null');
    }
    jwt.verify(token,process.env.MY_TOKEN_SECRETE,(err,decoded)=>{
        
      if(err){
        return res.status(403).send('token invalidmm');
      }
      else{
        console.log("token verified successfully");
        // console.log(decoded);
        

        next();
    }
    })


}

module.exports=Autherization;