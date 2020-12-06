const express = require('express');
const router = express.Router();
//const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool'); // require in database/pg

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    let id = req.params.id; // identifying which item to update - the (likes + 1) adds in the DB
    const sqlText = `UPDATE "gallery" SET "likes" = (likes + 1) WHERE id = $1;`;
    
    pool.query(sqlText, [id])
        .then((result) => {
            res.sendStatus(200); // sends an OK - this was updated in DB to client-side
        }).catch((error) => {
            console.log('Error when adding likes...', error)
            res.sendStatus(500); // Good server always responds
        }) 
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "gallery" ORDER BY "date", "path";`;
    pool.query(sqlText)
        .then((result) => {
            console.log('Got images from database...', result.rows);
            res.send(result.rows); // this is the info from the DB to send back to client-side
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    let newImage = req.body; // takes in the newImage as an object
    const sqlText = `INSERT INTO "gallery" ("path", "alt", "description", "date") 
                    VALUES ($1, $2, $3, $4)`;
   
    pool.query(sqlText, [newImage.path, newImage.alt, newImage.description, newImage.date])
        .then((result) => {
            console.log(`Added image to the database`, newImage);
            res.sendStatus(201); // sends an OK - it was created back to client-side
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
}) // end POST Route

// DELETE Route
router.delete('/:id', (req, res) => {
    let id = req.params.id; // idenfiys which item to delete
    const sqlText = `DELETE FROM "gallery" WHERE id=$1;`
    pool.query(sqlText, [id]) 
        .then((result) => { 
            res.sendStatus(200); // sends an OK - this was deleted to client-side
        })
        .catch( (error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
}) // DELETE Route

module.exports = router;