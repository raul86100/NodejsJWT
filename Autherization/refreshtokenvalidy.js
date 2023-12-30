const jwt = require('jsonwebtoken');
const dotenv = require('dotenv'); 
dotenv.config();

const Refreshvalidity=(refreshtoken)=>{
    var details='';
    // const barrertoken=`Bearer ${refreshtoken}`
    
    // const token=refreshtoken && refreshtoken.split(' ')[1];
    console.log("splited",refreshtoken);
    if(refreshtoken===null){
        return  res.status(401).send('token null');
    }
    try {
      const decoded = jwt.verify(refreshtoken,process.env.NEWREFRESHTOKEN_SECRETE);
      console.log(decoded,"decoded refresh token");
      details=decoded.username;
    } catch (error) {
      console.error('JWT verification failed:', error.message);
    }
   
 return details;

}

module.exports=Refreshvalidity;