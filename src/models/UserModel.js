const db = require('../config/database');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    password TEXT NOT NULL
  )`);
});

const createUser = (userData, callback) => {
  const { username, email, phone, password } = userData;
  const sql = 'INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)';
  db.run(sql, [username, email, phone, password], function(err) {
    callback(err, this.lastID);
  });
};

module.exports = { createUser };

const findByEmail = (email, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.get(sql, [email], (err, row) => {
      callback(err, row);
    });
  };
  
  module.exports = { createUser, findByEmail };
  