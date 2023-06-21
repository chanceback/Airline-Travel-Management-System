// Get an instance of mysql we can use in the app
const mysql = require('mysql')

// Create a 'connection pool' using the provided credentials
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1',
    port            : '3306',
    user            : 'root',
    password        : 'Volcomize16!',
    database        : 'airline_manager'
})

// Export it for use in our application
module.exports.pool = pool;