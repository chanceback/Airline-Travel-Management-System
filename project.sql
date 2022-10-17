SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;

DROP TABLE IF EXISTS Passengers;
DROP TABLE IF EXISTS Flights;
DROP TABLE IF EXISTS Airports;
DROP TABLE IF EXISTS Tickets;
DROP TABLE IF EXISTS Ticket_Classes;


/* Create Passengers Table*/
CREATE OR REPLACE TABLE Passengers(
    passenger_id int AUTO_INCREMENT NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    passport varchar(10) unique NOT NULL,
    email varchar(255) NOT NULL,
    phone_number varchar(15) NOT NULL,
    PRIMARY KEY (passenger_id)
);

/* Create Flights Table */
CREATE OR REPLACE TABLE Flights(
    flight_id int AUTO_INCREMENT NOT NULL,
    departing_airport int NOT NULL,
    arrival_airport int NOT NULL,
    departure_time timestamp NOT NULL,
    arrival_time timestamp NOT NULL,
    air_fare int NOT NULL,
    capacity int NOT NULL,
    PRIMARY KEY (flight_id),
    FOREIGN KEY (departing_airport) REFERENCES Airports(airport_id),
    FOREIGN KEY (arrival_airport) REFERENCES Airports(airport_id)
);

/* Create Airports Table */
CREATE OR REPLACE TABLE Airports(
    airport_id int AUTO_INCREMENT NOT NULL,
    airport_name varchar(255) NOT NULL,
    airport_location varchar(255) NOT NULL,
    PRIMARY KEY (airport_id)
);

/* Create Tickets Table */
CREATE OR REPLACE TABLE Tickets(
    ticket_id int AUTO_INCREMENT NOT NULL,
    passenger_id int NOT NULL,
    flight_id int NOT NULL,
    ticket_class int NOT NULL,
    PRIMARY KEY (ticket_id), 
    FOREIGN KEY (passenger_id) REFERENCES Passengers(passenger_id),
    FOREIGN KEY (flight_id) REFERENCES Flights(flight_id),
    FOREIGN KEY (ticket_class) REFERENCES Ticket_Classes(class_id)
);

/* Create Ticket_Classes Table */
CREATE OR REPLACE TABLE Ticket_Classes(
    class_id int AUTO_INCREMENT NOT NULL,
    class_name varchar(25) NOT NULL,
    upgrade_charge int NOT NULL,
    PRIMARY KEY (class_id)
);


/* Intersection Table? */

INSERT INTO Passengers (first_name, last_name, passport, email, phone_number)
VALUES
('Sterling', 'Archer', '652190223', 'archer@hello.com', '814-825-5951'),
('Stede', 'Bonnet', '141011810', 'bonnet@hello.com', '919-252-6000'),
('Michael', 'Scott', '498726075', 'scott@hello.com', '716-475-1975'),
('Mabel', 'Mora', '637071702', 'mora@hello.com', '315-794-6533'),
('Jeff', 'Winger', '576803679', 'winger@hello.com', '408-558-2426');


INSERT INTO Airports (airport_name, airport_location)
VALUES 
('LaGuardia Airport', 'New York'),
('Incheon Airport', 'Seoul'),
('Malpensa Airport', 'Milan'),
('Narita Airport', 'Tokyo'),
('Seville Airport', 'Spain');



INSERT INTO Flights ( 
    departing_airport,
    arrival_airport,
    departure_time,
    arrival_time,
    air_fare,
    capacity
)
VALUES
(
    (SELECT Airports.airport_id FROM Airports WHERE Airports.airport_name = 'LaGuardia Airport'),
    (SELECT Airports.airport_id FROM Airports WHERE Airports.airport_name = 'Seville Airport'),
    '2022-10-30 08:00:00',
    '2022-10-30 14:00:00',
    800,
    70
);

INSERT INTO Ticket_Classes ( class_name, upgrade_charge )
VALUES 
("First Class", 200),
("Business", 100),
("Economy" , 0);


INSERT INTO Tickets (
    passenger_id,
    flight_id,
    ticket_class
)
VALUES
(
    (SELECT Passengers.passenger_id FROM Passengers WHERE Passengers.passport = '652190223'),
    (SELECT Flights.flight_id FROM Flights WHERE Flights.flight_id = 1),
    (SELECT Ticket_Classes.class_id FROM Ticket_Classes WHERE Ticket_Classes.class_name = 'First Class')
);


SET FOREIGN_KEY_CHECKS=1;
SET AUTOCOMMIT = 1;