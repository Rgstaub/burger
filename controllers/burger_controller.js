"use strict"

const express = require('express');


// Import express and the Burger constructor
const burgers = require('../models/burger.js')

// Create the router
let router = express.Router();

router.get('/', (req, res) => {
  // Get all the burger data
  burgers.getAll( (response) => {
    // divide it devoured and not devoured arrays
    let uneaten = [];
    let eaten = [];
    response.forEach(burger => {
      if (burger.devoured) eaten.push(burger);
      else uneaten.push(burger);
    })
    // Send it to handlebars to render
    res.send([eaten, uneaten]);

  });


  // Send it to handlebars to render

})

router.post('/', (req, res) => {
  // Create a new burger using the new Burger name
  burgers.addOne(req.body.name);
  // Redirect to home to re-render the page
  res.redirect("/")
})



module.exports = router;