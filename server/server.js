const express = require('express');
const app = express(); // function call to use express
const bodyParser = require('body-parser');
const gallery = require('./routes/gallery.router.js');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build')); // constructs the website

/** ---------- EXPRESS ROUTES ---------- **/
// this is calling the instace of express - which manages the routes between client side and server side
app.use('/gallery', gallery);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});

// node.js is hosting the server - creates an internet on your computer - creates an address
// that can send and recieve requests locally