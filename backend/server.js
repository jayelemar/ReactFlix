const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const url = 'mongodb+srv://joseenso:babyonatis19@cluster0.mfgupkw.mongodb.net/?retryWrites=true&w=majority';

async function connectToMongoDB() {
  try {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('ReactFlix');
    const dataCollection = db.collection('User');
    const usersCollection = db.collection('users'); // Add this collection for user registration

    app.post('/quotes', async (req, res) => {
      const name = req.body.name;
      const quote = req.body.quote;

      try {
        const result = await dataCollection.insertOne({ name, quote });
        if (result.acknowledged) {
          console.log('Data inserted:', result.ops[0]);
        } else {
          console.error('Error inserting data:', result);
        }
      } catch (err) {
        console.error('Error inserting data:', err);
      }

      // Redirect or respond to the client as needed
      res.redirect('/');
    });

    app.post('/register', async (req, res) => {
      const username = req.body.username;
      const email = req.body.email;
      const password = req.body.password;

      try {
        const result = await usersCollection.insertOne({ username, email, password });
        if (result.acknowledged) {
          console.log('User registered with _id: ' + result.insertedId);
        } else {
          console.error('Error registering user:', result);
        }
      } catch (err) {
        console.error('Error registering user:', err);
      }

      // Redirect or respond to the client as needed
      res.redirect('/');
    });

    app.listen(port, () => {
      console.log('Server is running on port ' + port);
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connectToMongoDB();

app.get('/', (req, res) => {
  // Serve your HTML form here
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});
