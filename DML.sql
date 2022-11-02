-- Query for add a new character functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language

-- -----------------------------------------------------
-- Passengers
-- -----------------------------------------------------

-- ADD Passengers data to the Passengers table
INSERT INTO Passengers (first_name, last_name, passport, email, phone_number) 
VALUES (:first_nameInput, :last_nameInput, :passportInput, :emailInput, :phone_numberInput);
-- example of how to add passenger data
INSERT INTO Passengers (first_name, last_name, passport, email, phone_number)
VALUES('Sterling', 'Archer', '542637785', 'archer@hello.com', '814-825-5951')

-- DELETE Passengers data from the Passengers table
DELETE FROM 'Passengers' WHERE passenger_id = :passenger_idInput;
-- example of how to delete passenger data
DELETE FROM `Passengers` WHERE 1 = passenger_id;

-- SELECT all the Passengers in the Passengers table
SELECT passenger_id FROM Passengers;

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
-- example of how to update passenger data
UPDATE `Passengers` SET `first_name`= 'Mallory' WHERE 1 = passenger_id
UPDATE `Passengers` SET `first_name`= 'Sterling' WHERE 1 = passenger_id


-- -----------------------------------------------------
-- Airports
-- -----------------------------------------------------

-- ADD data to Airports table
INSERT INTO Airports (airport_id, airport_name, airport_location) 
VALUES (:airport_id, :airport_nameInput, :airport_locationInput);

INSERT INTO Airports (airport_name, airport_location)
VALUES ('LaGuardia Airport', 'New York'),

-- DELETE data from the Airports table
DELETE FROM Airports WHERE id = :airport_idInput;

DELETE FROM `Airports` WHERE 1 = airport_id;

-- SEARCH for Airports by airport name
SELECT airport_id as id, name FROM Airports WHERE airport_id = :arrival_airportInput;

SELECT airport_id as id, airport_name FROM Airports;

-- SELECT all the Airports in the Airports table
SELECT * FROM Airports;

-- UPDATE data in the Airports table
UPDATE Airports SET airport_identifier = :airport_idInput, airport_name = :airport_nameInput, airport_location = :airport_locationInput where id = :airport_idInput

UPDATE `Airports` SET `airport_name`= 'LGA' WHERE 1 = airport_id
UPDATE `Airports` SET `airport_name`= 'LaGuardia Airport' WHERE 1 = airport_id

-- -----------------------------------------------------
-- Flights
-- -----------------------------------------------------

-- ADD data into Flights table
INSERT INTO Flights (departure_airport, arrival_airport, departure_time, arrival_time, air_fare, capacity) 
VALUES (:departure_airportInput, :arrival_airportInput, :departure_timeInput, 
:arrival_timeInput, :air_fareInput, :capacityInput);

-- DELETE data from Flights table
DELETE FROM Flights 
WHERE id = :flight_idInput;

-- SELECT all the Flights in the Flights table
SELECT * FROM Flights;

-- UPDATE Flights data
UPDATE Flights 
SET departure_airport = :departure_airportInput, arrival_airport = :arrival_airportInput, departure_time = :departure_airportInput, 
arrival_time = :arrival_timeInput, air_fare = :air_fareInput, capacity = :capacityInput 
WHERE id = flight_idInput;

SELECT Flights.flight_id, d_airport.airport_name as Departure, a_airport.airport_name as Arrival, Flights.departure_time, Flights.arrival_time, Flights.air_fare, Flights.capacity 
FROM Flights 
JOIN Airports as d_airport ON d_airport.airport_id = Flights.departure_airport 
JOIN Airports as a_airport ON a_airport.airport_id = Flights.arrival_airport;

-- -----------------------------------------------------
-- Tickets
-- -----------------------------------------------------

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

-- DELETE 
DELETE FROM Ticket_Classes 
WHERE id = :class_idInput;

-- SELECT 
SELECT * FROM Ticket_Classes;

-- UPDATE 
UPDATE Ticket_Classes
SET class_name = :class_nameInput, upgrade_charge = upgrade_chargeInput
WHERE id = class_idInput

-- -----------------------------------------------------
-- Itineraries 
-- -----------------------------------------------------

-- ADD
INSERT INTO Itineraries (itinerary_id, passenger_id, trip_name) 
VALUES (:itinerary_idInput, :passenger_idInput, :trip_nameInput);

-- DELETE an itinerary by trip_name
DELETE FROM Itineraries 
WHERE trip_name = :trip_nameInput;

-- SELECT 
SELECT * FROM Itineraries;

-- UPDATE 
UPDATE Itineraries 
SET passenger_id = :passenger_idInput, trip_name = trip_nameInput
WHERE id = itinerary_idInput
