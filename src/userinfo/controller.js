const pool = require("../../db");
const queries = require("./queries");
const jwt=require('jsonwebtoken');
const dotenv = require('dotenv'); 
//const updatetoken=require('../../Autherization/updatetoken');
const refreshgeneration=require('../../Autherization/refreshtokenvalidy');
dotenv.config();







const login=(req,res)=>{
    const {username,password}=req.body;
    
   
    
    if(username===process.env.Username &&  password===process.env.Password){
        
        
       const accesstoken= jwt.sign({username:username},process.env.MY_TOKEN_SECRETE,{expiresIn:'30sec'});
       const refreshtoken=jwt.sign({username:username},process.env.NEWREFRESHTOKEN_SECRETE,{expiresIn:'30min'});
       
        res.json({accesstoken:accesstoken,refreshtoken:refreshtoken});
    }
    
}
const refreshtoken=async(req,res)=>{
    const {refreshtoken}=req.body;
    //console.log(">>>>",refreshtoken);
   const tokenusername=refreshgeneration(refreshtoken);
   //console.log(tokenusername);
   if(tokenusername.length>0){
   
    const accesstoken= jwt.sign({username:tokenusername},process.env.MY_TOKEN_SECRETE,{expiresIn:'30sec'});
    const myrefreshtoken=jwt.sign({username:tokenusername},process.env.NEWREFRESHTOKEN_SECRETE,{expiresIn:'30min'});
    res.json({accesstoken:accesstoken,refreshtoken:myrefreshtoken});}
    else{
      res.send("Refreshtoken is invalid")
    }
}
const getUser = (req, res) => {
    pool.query(queries.getall, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  }
  const del=(req,res)=>{
    const email=req.params.email;
    pool.query(queries.del,[email],(error,results)=>{
      if(error) throw error;
      res.status(200).send("deleted");
    })
  }
const add=(req,res)=>{
  const email=req.params.email;
  const firstname=req.params.firstname;
  const lastname=req.params.lastname;
  const mobile=req.params.mobile;
  const dob=req.params.dob;
  const address=req.params.address;
  pool.query(queries.add,[email,firstname,lastname,mobile,dob,address],(error,results)=>{
    if(error) throw error;
    res.status(200).send("inserted");
  })

}
const update=(req,res)=>{
  const {firstname,lastname,mobile,dob,address,email}=req.body;
  pool.query(queries.update,[firstname,lastname,mobile,dob,address,email],(error,results)=>{
    if(error) throw error;
    res.status(200).send("updated");
  })
}
const getbyid=(req,res)=>{
  const email=req.params.email;
  pool.query(queries.getbyid,[email],(error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
  })
}
  module.exports={
    getUser,del,add,update,getbyid,login,refreshtoken
  }