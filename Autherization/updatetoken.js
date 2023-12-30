function updatetoken(access,refresh){
const dotenv = require('dotenv');
const fs = require('fs');


const envConfig = dotenv.parse(fs.readFileSync('.env'));


envConfig.MY_TOKEN = access;
envConfig.REFRESH_TOKEN=refresh;


const updatedEnvFile = Object.entries(envConfig)
  .map(([key, value]) => `${key}=${value}`)
  .join('\n');


fs.writeFileSync('.env', updatedEnvFile, 'utf8');

console.log('Updated MY_TOKEN in .env to new_token_value');
}

module.exports=updatetoken;

