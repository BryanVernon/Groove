const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('users.db');

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password], (err) => {
    if (err) {
      return res.status(500).send({ message: 'Registration failed.' });
    }
    return res.status(201).send({ message: 'Registration successful.' });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, row) => {
    if (err || !row) {
      return res.status(401).send({ message: 'Login failed.' });
    }
    return res.status(200).send({ message: 'Login successful.' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
