//Yhteydenotto MySQL-kantaan
const mysql = require('mysql'); // Noden mysql -kirjasto

// Yhteys sijoitetaan muuttujaan conn
const conn = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'nodesk',
});

module.exports = conn;