"use strict"

// Create the router
const express = require('express');
let router = express.Router();

// Import express and the Burger constructor
const burgers = require('../models/burger.js')

//============== Routes ===================

router.get('/', (req, res) => {
  
  // Get all the burger data
  burgers.getAll(response => {
    // divide it into devoured and not devoured arrays
    let available = [];
    let unavailable = [];
    response.forEach(burger => {
      if (burger.devoured) unavailable.push(burger);
      else available.push(burger);
    })
    // Send it to handlebars to render
    res.render('index', { "uneaten": available, "eaten": unavailable })
  });
})

router.post('/', (req, res) => {
  // Create a new burger using the new Burger name
  burgers.addOne(req.body.name);
  // Redirect to home to re-render the page
  res.redirect("/");
})

// 'Devour' a burger of a given input
router.post('/_put/:id', (req, res) => {
  burgers.eatOne(req.params.id, () => {
    res.redirect('/');
  });
})

router.post('/refresh', (req, res) => {
  burgers.refreshAll();
  res.status(201);
})


module.exports = router;