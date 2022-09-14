const express = require('express');
const router = express.Router();

///////////////////////////////
// ROUTES
////////////////////////////////

// People Index Route
router.get('/', async (req, res) => {
    const context = {message: "people index route"};
    res.status(200).json(context)
        //this is the same thing without it.  status is just catching the status code as best practice

});

// People Create Route
router.post('/', async (req, res) => {
    console.log(req.body)
    res.status(201).json({message: "created more people for us"})
});

// People Show Route
router.get('/:id', async (req, res) => {
    res.status(200).json({message: 'people show route ' + req.params.id})
});

// People Delete Route
router.delete('/:id', async (req, res) => {
    res.status(200).json({message: "people delete route: " + req.params.id})
});

// People Update Route
router.delete('/:id', async (req, res) => {
    console.log(req.body)
    res.status(200).json({message: "people delete route: " + req.params.id})
});

module.exports =router;