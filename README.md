# Airline-Travel-Management-System

## About
This is a proof of concept CRUD (Create, Retrieve, Update, Delete) site with database interaction.

This site is meant to be used by a theoretical airline. The user is able to insert new entries, update entries, delete entries, search and view existing entries for a variety of airline-related applications.

### Technologies Used
- SQL (MySQL) for database management
- Node.js and Express.js for backend
- React.js for frontend

### Database Design
- [Entity Relationship Diagram](https://drive.google.com/uc?export=view&id=1xM8g_zWLVF5AH41cuf2k2d8uH2CDENCr)
- [Schema](https://drive.google.com/uc?export=view&id=1kCXtct2KKWB-1DyqjJm5qh-LsfJH6dQY)
- The final implementation with example data inserted can be viewed in the `DDL.sql` file [here](https://github.com/chanceback/Airline-Travel-Management-System/blob/main/DDL.sql)

## Screenshots

Search for passenger 'John Smith' from the 'Book Trip' Page:
![Passenger Search Page](https://drive.google.com/uc?export=view&id=17OQYncmz2aYyRVoTeGx7_f5kl-C0ftvC)

Results for 'John Smith' search:
![Passenger Search Results](https://drive.google.com/uc?export=view&id=1vwmWgeJVfIbIVRJ9zMo0_XLgGCcCLLsm)

Filling out the trip details for 'Smith Business Trip':
![Trip Info Form](https://drive.google.com/uc?export=view&id=1TYMmW15pGHBlMvY3GQwnAhrMq8qri1Ko)

The new trip itinerary appears in the Itineraries Page:
![Itineraries Page](https://drive.google.com/uc?export=view&id=1osdXT3vcq9X1QRAEUoAy52btbgdHGOHd)

Clicking the View button brings up the flight details:
![Clicking View Button](https://drive.google.com/uc?export=view&id=153c_QM0HIrTDZZVKKVYoI4P4v0JN0QUF)

Deleting the itinerary removes it from the Itineraries Page:
![Clicking Delete Button](https://drive.google.com/uc?export=view&id=1rlfbeHLypF8VvT9qEobD15X1qduM3tZC)

## Usage Setup
** SQL Database Setup **

An SQL database will need to be set up and the appropriate credentials entered into the [db-connector.js](https://github.com/chanceback/Airline-Travel-Management-System/blob/main/project/p-backend/database/db-connector.js) file.

From there run the [DDL.sql](https://github.com/chanceback/Airline-Travel-Management-System/blob/main/DDL.sql) file to get the appropriate table structure and example data.

** How to run locally **

Frontend: Use `npm install` to download the required modules. Then from there run `npm start`.

Backend: Similarly, use `npm install` to download the required modules. Then from there run `node app.js`.


*README structure was inspired by [the Hospital-Website](https://github.com/solderq35/hospital-website) repo from [solderq35](https://solderq35.github.io/)*
