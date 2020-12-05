const express = require('express');
const router = express.Router();
//const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool'); // require in database/pg

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    let id = req.params.id;
    const sqlText = `UPDATE "gallery" SET "likes" = (likes + 1) WHERE id = $1;`;
    
    pool.query(sqlText, [id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error when adding likes...', error)
            res.sendStatus(500);
        }) 
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "gallery" ORDER BY "date", "path";`;
    pool.query(sqlText)
        .then((result) => {
            console.log('Got images from database...', result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    const newImage = req.body;
    const sqlText = `INSERT INTO "gallery" ("path", "alt", "description", "date") 
                    VALUES ($1, $2, $3, $4)`;
   
    pool.query(sqlText, [newImage.path, newImage.alt, newImage.description, newImage.date])
        .then((result) => {
            console.log(`Added image to the database`, newImage);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    let id = req.params.id; 
    let sqlText = `DELETE FROM "gallery" WHERE id=$1;`
    pool.query(sqlText, [id]) 
        .then((result) => { 
            res.sendStatus(200); 
        })
        .catch( (error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;