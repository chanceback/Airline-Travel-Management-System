// App.js

/*
    SETUP
*/
const express = require('express');   // We are using the express library for the web server
const bodyParser = require('body-parser')
const cors = require('cors')
const app     = express();            // We need to instantiate an express object to interact with the server in our code
PORT        =  11789;                 // Set a port number at the top so it's easy to change in the future

// Database
const db = require('./database/db-connector').pool

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

/*
    ROUTES
*/
// CREATE controller *********************************************************
// Add New Passenger
app.post('/passengers/add', (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const passport = req.body.passport
    const email = req.body.email
    const phoneNumber = req.body.phoneNumber

    const sql_insert = 
        'INSERT INTO Passengers (first_name, last_name, passport, email, phone_number) VALUES (?,?,?,?,?)'

    db.query(sql_insert, [firstName, lastName, passport, email, phoneNumber], (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(400)
        } else{
            res.sendStatus(201)
        }
    })
})

// Add New Airport
app.post('/airports/add', (req, res) => {
    const airport_id = req.body.airport_id
    const airport_name = req.body.airport_name
    const airport_location = req.body.airport_location

    const sql_insert = 
        'INSERT INTO Airports (airport_id, airport_name, airport_location) VALUES (?,?,?)'

    db.query(sql_insert, [airport_id, airport_name, airport_location], (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(400)
        } else{
            res.sendStatus(201)
        }
    })
})

// Add New Flight
app.post('/flights/add', (req, res) => {
    const departure_airport = req.body.departure_airport
    const arrival_airport = req.body.arrival_airport
    const departure_time = req.body.departure_time
    const arrival_time = req.body.arrival_time
    const air_fare = req.body.air_fare
    const capacity = req.body.capacity

    const sql_insert = 
        'INSERT INTO Flights (departure_airport, arrival_airport, departure_time, arrival_time, air_fare, capacity) VALUES (?,?,CAST(? AS datetime),CAST(? AS datetime),?,?)'

    db.query(sql_insert, [departure_airport, arrival_airport, departure_time, arrival_time, air_fare, capacity], (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(400)
        } else{
            res.sendStatus(201)
        }
    })
})

// Add New Ticket Class
app.post('/ticket-classes/add', (req, res) => {
    const class_name = req.body.class_name
    const upgrade_charge = req.body.upgrade_charge

    const sql_insert = 
        'INSERT INTO Ticket_Classes (class_name, upgrade_charge) VALUES (?,?)'

    db.query(sql_insert, [class_name, upgrade_charge], (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(400)
        } else{
            res.sendStatus(201)
        }
        
    })
})

// RETRIEVE controller *******************************************************
// Get Passengers
app.get('/passengers', (req, res) => {
    const sqlSelect = "SELECT * FROM Passengers";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// Get Airports
app.get('/airports', (req, res) => {
    const sqlSelect = "SELECT * FROM Airports";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// Get Flights Table data
app.get('/flights-table', (req, res) => {
    const sqlSelect = (
        `SELECT Flights.flight_id, Flights.departure_airport, Flights.arrival_airport, 
            d_airport.airport_name as Departure, 
            a_airport.airport_name as Arrival, CAST(Flights.departure_time AS char) as dt, 
            CAST(Flights.arrival_time AS char) as at, Flights.air_fare, Flights.capacity 
            FROM Flights 
            JOIN Airports as d_airport ON d_airport.airport_id = 
            Flights.departure_airport JOIN Airports as a_airport 
            ON a_airport.airport_id = Flights.arrival_airport`);
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// Get Itineraries
app.get('/itineraries-table', (req, res) => {
    const sqlSelect = `SELECT Itineraries.itinerary_id, Passengers.first_name as first_name, 
        Passengers.last_name as last_name, Passengers.passport as passport, Itineraries.trip_name 
        FROM Itineraries 
        JOIN Passengers 
        ON Passengers.passenger_id = Itineraries.passenger_id;
    `;
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// Get Itinerary Flight Path
app.get('/itineraries/:id', (req, res) => {
    const id = req.params.id
    const sqlSelect = (
        `SELECT Flights.flight_id, Flights.departure_airport, Flights.arrival_airport, 
            d_airport.airport_name as Departure, 
            a_airport.airport_name as Arrival, CAST(Flights.departure_time AS char) as dt, 
            CAST(Flights.arrival_time AS char) as at, Flights.air_fare, Flights.capacity 
            FROM Flights 
            JOIN Airports as d_airport ON d_airport.airport_id = 
            Flights.departure_airport JOIN Airports as a_airport 
            ON a_airport.airport_id = Flights.arrival_airport
            JOIN Tickets ON Tickets.flight_id = Flights.flight_id
            WHERE Tickets.itinerary_id = ?
            ORDER BY Tickets.ticket_id ASC `);
    db.query(sqlSelect, [id], (err, result) => {
        res.send(result);
    });
});

// Get Ticket Classes
app.get('/ticket-classes', (req, res) => {
    const sqlSelect = "SELECT * FROM Ticket_Classes";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

// Get Tickets
app.get('/tickets', (req, res) => {
    const sqlSelect = "SELECT * FROM Tickets";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});


// UPDATE controller *********************************************************
// UPDATE Passenger
app.put('/passengers/:id', (req, res) => {
    const id = req.params.id
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const passport = req.body.passport
    const email = req.body.email
    const phoneNumber = req.body.phoneNumber
    const sqlUpdate = 
        "UPDATE Passengers SET first_name = ?, last_name = ?, passport = ?, email = ?, phone_number = ? WHERE passenger_id = ?"
    
    db.query(sqlUpdate, [firstName, lastName, passport, email, phoneNumber, id], (err, result) => {
        if (result.affectedRows === 0) {
            console.log(err)
            res.sendStatus(404)
        } else{
            console.log(result)
            res.sendStatus(200)
        }
    })
})

// UPDATE Airport
app.put('/airports/:id', (req, res) => {
    const id = req.params.id
    const airport_name = req.body.airport_name
    const airport_location = req.body.airport_location
    const sqlUpdate = 
        "UPDATE Airports SET airport_name = ?, airport_location = ? WHERE airport_id = ?"
    
    db.query(sqlUpdate, [airport_name, airport_location, id], (err, result) => {
        if (result.affectedRows === 0) {
            console.log(err)
            res.sendStatus(404)
        } else{
            console.log(result)
            res.sendStatus(200)
        }
    })
})

// UPDATE Flight
app.put('/flights/:id', (req, res) => {
    const id = req.params.id
    const departure_airport = req.body.departure_airport
    const arrival_airport = req.body.arrival_airport
    const departure_time = req.body.departure_time
    const arrival_time = req.body.arrival_time
    const air_fare = req.body.air_fare
    const capacity = req.body.capacity
    const sqlUpdate = 
        "UPDATE Flights SET departure_airport = ?, arrival_airport = ?, departure_time = CAST(? AS datetime), arrival_time = CAST(? AS datetime), air_fare = ?, capacity = ? WHERE flight_id = ?"
    
    db.query(sqlUpdate, [departure_airport, arrival_airport, departure_time, arrival_time, air_fare, capacity, id], (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(404)
        } else{
            console.log(result)
            res.sendStatus(200)
        }
    })
})

// UPDATE Ticket Class
app.put('/ticket-classes/:id', (req, res) => {
    const id = req.params.id
    const class_name = req.body.class_name
    const upgrade_charge = req.body.upgrade_charge
    const sqlUpdate = 
        "UPDATE Ticket_Classes SET class_name = ?, upgrade_charge = ? WHERE class_id = ?"
    
    db.query(sqlUpdate, [class_name, upgrade_charge, id], (err, result) => {
        if (result.affectedRows === 0) {
            console.log(err)
            res.sendStatus(404)
        } else{
            console.log(result)
            res.sendStatus(200)
        }
    })
})

// DELETE controller *********************************************************
// DELETE Passenger
app.delete('/passengers/:id', (req, res) => {
    const id = req.params.id
    const sqlDelete = "DELETE FROM Passengers WHERE passenger_id = ?"
    db.query(sqlDelete, id, (err, result) => {

        if (result.affectedRows === 0) {
            console.log(err)
            res.sendStatus(404)
        } else{
            console.log(result)
            res.sendStatus(204)
        }
    })
})

// DELETE Airport
app.delete('/airports/:id', (req, res) => {
    const id = req.params.id
    const sqlDelete = "DELETE FROM Airports WHERE airport_id = ?"
    db.query(sqlDelete, id, (err, result) => {

        if (result.affectedRows === 0) {
            console.log(err)
            res.sendStatus(404)
        } else{
            console.log(result)
            res.sendStatus(204)
        }
    })
})

// DELETE Flight
app.delete('/flights/:id', (req, res) => {
    const id = req.params.id
    const sqlDelete = "DELETE FROM Flights WHERE flight_id = ?"
    db.query(sqlDelete, id, (err, result) => {

        if (result.affectedRows === 0) {
            console.log(err)
            res.sendStatus(404)
        } else{
            console.log(result)
            res.sendStatus(204)
        }
    })
})

// DELETE Ticket Class
app.delete('/ticket-classes/:id', (req, res) => {
    const id = req.params.id
    const sqlDelete = "DELETE FROM Ticket_Classes WHERE class_id = ?"
    db.query(sqlDelete, id, (err, result) => {

        if (result.affectedRows === 0) {
            console.log(err)
            res.sendStatus(404)
        } else{
            console.log(result)
            res.sendStatus(204)
        }
    })
})

// DELETE Itinerary
app.delete('/itineraries/:id', (req, res) => {
    const id = req.params.id
    const sqlDelete = "DELETE FROM Itineraries WHERE itinerary_id = ?"
    db.query(sqlDelete, id, (err, result) => {

        if (result.affectedRows === 0) {
            console.log(err)
            res.sendStatus(404)
        } else{
            console.log(result)
            res.sendStatus(204)
        }
    })
})


/*
    LISTENER
*/
app.listen(PORT, () => {            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://flip2.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.')
});