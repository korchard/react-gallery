const pg = require('pg'); // requiring in database

let config = {}

if (process.env.DATABASE_URL) {
    // Running remote (heroku)
    config = { // providing parameters to the database, as well as identifying database
        connectionString: process.env.DATABASE_URL,
        ssl: {rejectUnauthorized: false},
    };

} else {
    // Running locally
    config = { // providing parameters to the database, as well as identifying database
        database: 'react_gallery',
        host: 'localhost',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000
    };
}

// Create the pool with the proper config
const pool = new pg.Pool(config);

pool.on("connect", () => {
    console.log("connected to postgres..."); //connects database
});

pool.on("error", (err) => {
    console.log("error connecting to postgres...", err);
});

module.exports = pool;