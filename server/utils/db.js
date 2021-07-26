const mysql = require('mysql2');

const pool = mysql.createPool({
  /* host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'wikhitdb', */
  host: 'awswikihit.cd52zh4e4tnd.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'WikiHit2021!',
  database: 'wikhitdb',


});

module.exports = pool.promise();
