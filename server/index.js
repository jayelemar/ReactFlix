// Our Dependecies
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(cors());

// Let us run the server. So its running
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});

// Let us create our database (mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '', //If you have set xampp password please enter it here
    database: 'reactflix', // Specify the database name here
});


// let us now create a route to the server that will register a user

app.post('/register', (req, res) => {
    const sentEmail = req.body.Email;
    const sentUserName = req.body.UserName;
    const sentPassword = req.body.Password;

    // Check if the email already exists in the database
    const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkEmailQuery, [sentEmail], (err, results) => {
        if (err) {
            res.status(500).send({ message: 'Error checking email' });
        } else if (results.length > 0) {
            // Email already exists, return an error message
            res.send({ message: 'Email already exists in the database.' });
        } else {
            // Email is not in the database, proceed with user registration
            bcrypt.hash(sentPassword, 10, (err, hashedPassword) => {
                if (err) {
                    res.status(500).send({ message: 'Error hashing password' });
                } else {
                    // Insert the user into the database
                    const insertUserQuery = 'INSERT INTO reactflix.users (email, username, password) VALUES (?,?,?)';
                    const values = [sentEmail, sentUserName, hashedPassword];
                    db.query(insertUserQuery, values, (err, results) => {
                        if (err) {
                            res.status(500).send({ message: 'Error inserting user' });
                        } else {
                            console.log('User inserted successfully!');
                            res.send({ message: 'User added!' });
                        }
                    });
                }
            });
        }
    });
});


app.post('/login', (req, res) => {
    const sentLoginUserName = req.body.LoginUserName;
    const sentLoginPassword = req.body.LoginPassword;
    const sentEmail = req.body.Email; // Assuming "gmail" means email

    // Let's create an SQL statement to check the user's credentials
    const selectUserSQL = 'SELECT id FROM users WHERE username = ? AND password = ? AND email = ?';
    const selectUserValues = [sentLoginUserName, sentLoginPassword, sentEmail];

    db.query(selectUserSQL, selectUserValues, (err, results) => {
        if (err) {
            res.send({ error: err });
        } else if (results.length > 0) {
            const userId = results[0].id;

            // Insert a login log entry with the user's ID and current date and time
            const insertLoginLogSQL = 'INSERT INTO login_log (user_id, login_time) VALUES (?, NOW())';
            const insertLoginLogValues = [userId];

            db.query(insertLoginLogSQL, insertLoginLogValues, (logErr) => {
                if (logErr) {
                    console.error('Error inserting login log:', logErr);
                    res.send({ error: 'Login log insertion failed' });
                } else {
                    res.send({ message: 'Login successful' });
                }
            });
        } else {
            res.send({ message: 'Credentials Don\'t match!' });
        }
    });
});
