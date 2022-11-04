const dotenv = require('dotenv');
dotenv.config({ path: './.env'});

module.exports = {
  HOST: 'eu-cdbr-west-03.cleardb.net',
  USER: 'bf5daaba5dd6a0',
  PASSWORD: 'fa5906bd',
  DB: 'heroku_7b39341013da9cc',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
