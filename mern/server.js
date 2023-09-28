const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mern',
});

// Register a user
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, hashedPassword],
    (err, results) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Registration failed' });
      } else {
        res.status(201).json({ message: 'Registration successful' });
      }
    }
  );
});


// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  db.query(
    'SELECT * FROM users WHERE username = ? OR email = ?',
    [username, username], // Check both username and email
    async (err, results) => {
      if (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ message: 'Login failed' });
      } else if (results.length === 0) {
        res.status(401).json({ message: 'Username or email not found' });
      } else {
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          // Generate and save a session token, then return it in the response
          // You can use a JWT or a session token here
          const token = 'your_generated_token';
          db.query(
            'INSERT INTO sessions (user_id, token) VALUES (?, ?)',
            [user.id, token],
            (err) => {
              if (err) {
                console.error('Error creating session:', err);
                res.status(500).json({ message: 'Login failed' });
              } else {
                res.status(200).json({ message: 'Login successful', token });
              }
            }
          );
        } else {
          res.status(401).json({ message: 'Password incorrect' });
        }
      }
    }
  );
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
