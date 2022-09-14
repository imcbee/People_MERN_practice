const express = require('express');
const router = express.Router();
const {People} = require('../models');


///////////////////////////////
// ROUTES
////////////////////////////////

// People Index Route
router.get('/', async (req, res) => {
    // const context = {message: "people index route"};
    // res.status(200).json(context)
    //     //this is the same thing without it.  status is just catching the status code as best practice
    try{
        res.status(200).json(await People.find({}));
            //this is displaying everyone
    }catch(err){
        res.status(400).json(err);
    }
});

// People Create Route
router.post('/', async (req, res) => {
    // console.log(req.body)
    // res.status(201).json({message: "created more people for us"})
    try{
        res.status(201).json(await People.create(req.body));
    }catch(err){
        res.status(400).json(err);
    }

});

// People Show Route
router.get('/:id', async (req, res) => {
    // res.status(200).json({message: 'people show route ' + req.params.id})
    try{
        res.status(200).json(await People.findById(req.params.id))
    }catch(err){
        res.status(400).json(err);
    }
});

// People Update Route
router.put('/:id', async (req, res) => {
    // console.log(req.body)
    // res.status(200).json({message: "people delete route: " + req.params.id})
    try{
        res.status(200).json(await People.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    }catch(err){
        res.status(400).json(err);
    }
});
// People Delete Route
router.delete('/:id', async (req, res) => {
    // res.status(200).json({message: "people delete route: " + req.params.id})
    try{
        res.status(200).json(await People.findByIdAndRemove(req.params.id))
    }catch(err){
        res.status(400).json(err);
    }
});


module.exports =router;