const dotEnv = require("dotenv");
dotEnv.config();

module.exports = {
    url: process.env.MONGOBDURL
  };
  
