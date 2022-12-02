-- Query for add a new character functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language
-- -----------------------------------------------------
-- Passengers
-- -----------------------------------------------------
-- ADD Passengers data to the Passengers table
INSERT INTO Passengers (first_name, last_name, passport, email, phone_number) 
VALUES (:first_nameInput, :last_nameInput, :passportInput, :emailInput, :phone_numberInput);

INSERT INTO Passengers (first_name, last_name, passport, email, phone_number) 
VALUES (?,?,?,?,?)
 
-- EXAMPLE QUERY 
INSERT INTO Passengers (first_name, last_name, passport, email, phone_number)
VALUES('Sterling', 'Archer', '542637785', 'archer@hello.com', '814-825-5951')

-- DELETE Passengers data from the Passengers table
DELETE FROM 'Passengers' WHERE passenger_id = :passenger_idInput;

DELETE FROM Passengers WHERE passenger_id = ?

-- EXAMPLE QUERY 
DELETE FROM `Passengers` WHERE 1 = passenger_id;

-- SELECT Passengers in the Passengers table
SELECT passenger_id FROM Passengers;

SELECT * FROM Passengers;

-- SELECT Passengers by First and Last Name from the Passengers table
SELECT * FROM Passengers WHERE first_name = ? AND last_name = ?;

-- SEARCH...
SELECT passenger_id as id, first_name FROM Passengers;
SELECT passenger_id as id, last_name FROM Passengers;
SELECT passenger_id as id, passport FROM Passengers;
SELECT passenger_id as id, email FROM Passengers;
SELECT passenger_id as id, phone_number FROM Passengers;

-- UPDATE Passengers Information 
UPDATE 'Passengers'
SET 'passenger_id' = :passenger_idInput, first_name = :first_nameInput, last_name = :last_nameInput, passport = passportInput, email = :emailInput, phone_number = :phone_numberInput 
WHERE id = :passenger_idInput;

UPDATE Passengers SET first_name = ?, last_name = ?, passport = ?, email = ?, phone_number = ? WHERE passenger_id = ?

-- EXAMPLE UPDATE QUERY 
UPDATE `Passengers` SET `first_name`= 'Mallory' WHERE 1 = passenger_id
UPDATE `Passengers` SET `first_name`= 'Sterling' WHERE 1 = passenger_id

-- -----------------------------------------------------
-- Airports
-- -----------------------------------------------------
-- ADD data to Airports table
INSERT INTO Airports (airport_id, airport_name, airport_location) 
VALUES (:airport_id, :airport_nameInput, :airport_locationInput);

INSERT INTO Airports (airport_id, airport_name, airport_location) 
VALUES (?,?,?);

-- EXAMPLE QUERY
INSERT INTO Airports (airport_name, airport_location)
VALUES ('LaGuardia Airport', 'New York');

-- DELETE data from the Airports table
DELETE FROM Airports WHERE id = :airport_idInput;
DELETE FROM `Airports` WHERE 1 = airport_id;

DELETE FROM Airports WHERE airport_id = ?

-- SEARCH data for Airports by airport name
SELECT airport_id as id, name FROM Airports WHERE airport_id = :arrival_airportInput;
SELECT airport_id as id, airport_name FROM Airports;

-- SELECT data in the Airports table
SELECT airport_name FROM Airports;

SELECT * FROM Airports;

-- UPDATE data in the Airports table
UPDATE Airports SET airport_identifier = :airport_idInput, airport_name = :airport_nameInput, airport_location = :airport_locationInput where id = :airport_idInput

UPDATE Airports SET airport_name = ?, airport_location = ? WHERE airport_id = ?

-- EXAMPLE QUERY 

UPDATE `Airports` SET `airport_name`= 'LGA' WHERE 1 = airport_id
UPDATE `Airports` SET `airport_name`= 'LaGuardia Airport' WHERE 1 = airport_id


-- -----------------------------------------------------
-- Flights
-- -----------------------------------------------------

-- ADD data into Flights table
INSERT INTO Flights (departure_airport, arrival_airport, departure_time, arrival_time, air_fare, capacity) 
VALUES (:departure_airportInput, :arrival_airportInput, :departure_timeInput, 
:arrival_timeInput, :air_fareInput, :capacityInput);

-- INSERT data
INSERT INTO Flights (departure_airport, arrival_airport, departure_time, arrival_time, air_fare, capacity) 
VALUES (?,?,CAST(? AS datetime),
CAST(? AS datetime),?,?);

-- DELETE data from Flights table

DELETE FROM Flights 
WHERE id = :flight_idInput;

DELETE FROM Flights WHERE flight_id = ?

-- SELECT all the Flights in the Flights table
SELECT * FROM Flights;

-- SELECT / GET Flights Data
SELECT Flights.flight_id, Flights.departure_airport, Flights.arrival_airport, d_airport.airport_name as Departure, a_airport.airport_name as Arrival, 
CAST(Flights.departure_time AS char) as dt, 
CAST(Flights.arrival_time AS char) as at, Flights.air_fare, Flights.capacity 
FROM Flights 
LEFT JOIN Airports as d_airport ON d_airport.airport_id = Flights.departure_airport JOIN Airports as a_airport 
ON a_airport.airport_id = Flights.arrival_airport);

-- UPDATE Flights Data
UPDATE Flights 
SET departure_airport = :departure_airportInput, arrival_airport = :arrival_airportInput, departure_time = :departure_airportInput, 
arrival_time = :arrival_timeInput, air_fare = :air_fareInput, capacity = :capacityInput 
WHERE id = flight_idInput;

UPDATE Flights SET departure_airport = NULL, arrival_airport = NULL, departure_time = CAST(? AS datetime), arrival_time = CAST(? AS datetime), air_fare = ?, capacity = ? WHERE flight_id = ?

UPDATE Flights SET departure_airport = NULL, arrival_airport = ?, departure_time = CAST(? AS datetime), arrival_time = CAST(? AS datetime), air_fare = ?, capacity = ? WHERE flight_id = ?

UPDATE Flights SET departure_airport = ?, arrival_airport = NULL, departure_time = CAST(? AS datetime), arrival_time = CAST(? AS datetime), air_fare = ?, capacity = ? WHERE flight_id = ?

UPDATE Flights SET departure_airport = ?, arrival_airport = ?, departure_time = CAST(? AS datetime), arrival_time = CAST(? AS datetime), air_fare = ?, capacity = ? WHERE flight_id = ?

-- -----------------------------------------------------
-- Tickets
-- -----------------------------------------------------

INSERT INTO Tickets (itinerary_id, flight_id, ticket_class) 
VALUES 
        (
            (SELECT Itineraries.itinerary_id 
            FROM Itineraries 
            WHERE Itineraries.passenger_id = ${passenger_id} 
            AND Itineraries.trip_name = '${trip_name}'),
            ?,
            ?
        )

-- ADD
INSERT INTO Tickets (ticket_id, itinerary_id, flight_id, ticket_class) 
VALUES (:ticket_idInput, :itinerary_idInput, :flight_idInput, ticket_classInput);

-- DELETE 
DELETE FROM Tickets
WHERE id = :ticket_idInput;

-- SELECT 
SELECT * FROM Tickets;

-- UPDATE

UPDATE Tickets
SET itinerary_id = itinerary_idInput, flight_id = flight_idInput, ticket_class = ticket_classInput
WHERE id = ticket_idInput


-- -----------------------------------------------------
-- Ticket Classes
-- -----------------------------------------------------

-- ADD
INSERT INTO Ticket_Classes (class_id, class_name, upgrade_charge) 
VALUES (:class_idInput, :class_nameInput, :upgrade_chargeInput);

INSERT INTO Ticket_Classes (class_name, upgrade_charge) 
VALUES (?,?)

-- DELETE 
DELETE FROM Ticket_Classes 
WHERE id = :class_idInput;

DELETE FROM Ticket_Classes WHERE class_id = ?

-- SELECT 
SELECT * FROM Ticket_Classes;

SELECT Ticket_Classes.class_name FROM Ticket_Classes;

-- UPDATE 
UPDATE Ticket_Classes
SET class_name = :class_nameInput, upgrade_charge = upgrade_chargeInput
WHERE id = class_idInput

UPDATE Ticket_Classes SET class_name = ?, upgrade_charge = ? WHERE class_id = ?


-- -----------------------------------------------------
-- Itineraries 
-- -----------------------------------------------------

-- ADD
INSERT INTO Itineraries (itinerary_id, passenger_id, trip_name) 
VALUES (:itinerary_idInput, :passenger_idInput, :trip_nameInput);

INSERT INTO Itineraries (passenger_id, trip_name) 
VALUES (?,?)

-- DELETE an itinerary by trip_name
DELETE FROM Itineraries 
WHERE trip_name = :trip_nameInput;

DELETE FROM Itineraries WHERE itinerary_id = ?

-- SELECT 
SELECT * FROM Itineraries;
SELECT trip_name FROM Itineraries;

-- SELECT / GET Itineraries
SELECT Itineraries.itinerary_id, Passengers.first_name as first_name, Passengers.last_name as last_name, Passengers.passport as passport, Itineraries.trip_name 
FROM Itineraries 
JOIN Passengers 
ON Passengers.passenger_id = Itineraries.passenger_id;

-- SELECT / GET Itineraries Flight Path
SELECT Flights.flight_id, Flights.departure_airport, Flights.arrival_airport, d_airport.airport_name as Departure, a_airport.airport_name as Arrival, 
CAST(Flights.departure_time AS char) as dt, 
CAST(Flights.arrival_time AS char) as at, Flights.air_fare, Flights.capacity 
FROM Flights 
LEFT JOIN Airports as d_airport ON d_airport.airport_id = Flights.departure_airport JOIN Airports as a_airport 
ON a_airport.airport_id = Flights.arrival_airport
JOIN Tickets ON Tickets.flight_id = Flights.flight_id
WHERE Tickets.itinerary_id = ?
ORDER BY Tickets.ticket_id ASC;
            
-- UPDATE 
UPDATE Itineraries 
SET passenger_id = :passenger_idInput, trip_name = trip_nameInput
WHERE id = itinerary_idInput

SELECT Itineraries.itinerary_id, Passengers.first_name, Passengers.last_name, Passengers.passport, Itineraries.trip_name 
FROM Itineraries 
JOIN Passengers 
ON Passengers.passenger_id = Itineraries.passenger_id;
