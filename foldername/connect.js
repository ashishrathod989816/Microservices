const mysql = require('mysql');
const connect= mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'payment'
});
connect.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  
});
module.exports = connect;