require('dotenv').config()
const express = require('express')
const app = express()
var mysql      = require('mysql')

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DBHOST,
    user            : process.env.DBUSER,
    password        : process.env.DBPASS,
    database        : process.env.DBNAME,
    timezone: 'UTC'
  });

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : '513szoft_zarodolgozatok'
});
 
connection.connect()

app.post('/create', function (req, res) {
    connection.query('', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
  })

app.get('/read', function (req, res) {
    connection.query('SELECT * FROM ${zarodolgozatok}', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
  })

app.put('/update', function (req, res) {
    connection.query('', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
})

app.delete('/delete', function (req, res) {
    connection.query('', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
  })

app.listen(5000)
