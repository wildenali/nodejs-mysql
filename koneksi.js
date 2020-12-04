var mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs_mysql_db'
});

conn.connect((err) => {
  if (err) {
    throw err;
  } else{
    console.log('mysql terKONEKSI');
  }
})

module.exports = conn;