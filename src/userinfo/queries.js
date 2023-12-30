const getall="SELECT * FROM userinfo ORDER BY create_time DESC ";
const del = "DELETE FROM userinfo  WHERE email=$1";
const add="INSERT INTO userinfo (email,firstname,lastname,mobile,dob,address) VALUES ($1,$2,$3,$4,$5,$6)";
const update="UPDATE userinfo SET firstname=$1,lastname=$2,mobile=$3,dob=$4,address=$5,create_time=CURRENT_TIMESTAMP WHERE email=$6";
const getbyid="SELECT  * FROM userinfo WHERE email=$1";

module.exports={
    getall,del,add,update,getbyid
}