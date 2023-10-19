const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); 
const cookieParser = require('cookie-parser');
const ReactFlixModel = require('./models/ReactFlix')
const { check, validationResult } = require('express-validator');

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


app.post('/login', [
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({ min: 6 })
  ], async (req, res) => {
    try {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email, password } = req.body;
  
      const user = await ReactFlixModel.findOne({ email });
  
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (passwordMatch) {
          return res.json('Success');
        } else {
          return res.status(401).json('Invalid credentials');
        }
      } else {
        return res.status(401).json('Invalid credentials');
      }
    } catch (err) {
      console.error('Error during login:', err);
      return res.status(500).json('An error occurred during login');
    }
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


  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
