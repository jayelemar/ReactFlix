const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); 
const cookieParser = require('cookie-parser');
const ReactFlixModel = require('./models/ReactFlix')

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/ReactFlix", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    ReactFlixModel.findOne({ email: email })
      .then(users => {
        if (users) {
          if (user.password === password) {
            // Password is correct, so you can consider this a successful login
            res.json("Success");
          } else {
            // Password is incorrect
            res.json("The password is incorrect");
          }
        } else {
          // No user with this email exists
          res.json("No Account Existed");
        }
      })
      .catch(err => {
        // Handle any errors that occur during the database query
        console.error("Error during login:", err);
        res.status(500).json("An error occurred during login");
      });
  });
  

  app.post('/register', (req, res) => {
    const { username, password } = req.body;
  
    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      // Create a new user with the hashed password
      ReactFlixModel.create({ username, password: hash })
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ error: err.message }));
    });
  });

  app.get('/api/users', async (req, res) => {
    try {
      const users = await users.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching users' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
