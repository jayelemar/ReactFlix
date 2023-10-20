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

  app.post('/registered', (req, res) => {
    const { username, email } = req.body;
  
    // Check if the username contains a dot
    const isUserAdmin = username.includes('.');
  
    // Create a new user in the database
    const newUser = new User({
      username: username,
      email: email,
      // populate other user data
    });
  
    newUser.save((err, user) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error creating user' });
      } else {
        // Determine the role
        const roleName = isUserAdmin ? 'admin' : 'user';
  
        Role.findOne({ roleName }, (err, role) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error finding role' });
          } else {
            const mergedData = new MergedData({
              user: user._id,
              role: role._id,
              // populate other merged data fields
            });
  
            mergedData.save((err) => {
              if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error saving merged data' });
              }
  
              // Send a response to the client
              res.status(200).json({ message: 'User registered successfully' });
            });
          }
        });
      }
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
