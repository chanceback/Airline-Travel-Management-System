// App.js

/*
    SETUP
*/
const express = require('express');   // We are using the express library for the web server
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
const app     = express();            // We need to instantiate an express object to interact with the server in our code
PORT        =  11785;                 // Set a port number at the top so it's easy to change in the future

// Database
const db = require('./database/db-connector').pool

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

/*
    ROUTES
*/
app.get('/get', (req, res) => {
    const sqlSelect = "SELECT * FROM Passengers";
    db.query(sqlSelect, (err, result) => {
        res.send(JSON.stringify(result));
    });
});

/*
    LISTENER
*/
app.listen(PORT, () => {            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://flip3.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.')
});