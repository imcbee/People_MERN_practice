///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// init .env vars
require('dotenv').config(); 
    // allows you to access the .env file
    // 'dotenv' is checkign the packages
const {PORT, MONGODB_URI} = process.env;
    // destructing the items in the .env file to able to use
    // allows use 4000, react use 3000
const express = require('express');
const app = express();

// Add in mongoose
    // why in here? pure laziness, when you scale up, use the connection folder
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI);

// My Controllers
const peopleController = require('./controllers/people-controller')

const cors = require('cors');
const morgan = require('morgan');
    // cors helps connect backend with frontend
    // morgan helps with ...

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////

// Connection Events
    //these are from the mongo docs
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));


////////////////////////////////
// Middleware
////////////////////////////////
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
    // we need to parse the json before the routes.

    app.use('/people', peopleController);

  ///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route

app.get('/', (req, res) => {
    res.send('hello world')
})

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));