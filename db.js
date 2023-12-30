const Pool=require('pg').Pool;
const pool=new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'first_poc',
    password: 'admin',
    port: 5432,
})
module.exports=pool;