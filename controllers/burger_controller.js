"use strict"

// Create the router
const express = require('express');
const router = express.Router();

// Import the Burger constructor
const burgers = require('../models/burger.js')

//=========================== Routes ==================================

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
  
  
  // let columns = ['pickles', 'cheese'];
  // let values = [true, false];
  // burgers.getSome(columns, values, response => {
  //   // divide it into devoured and not devoured arrays
  //   let available = [];
  //   let unavailable = [];
  //   response.forEach(burger => {
  //     if (burger.devoured) unavailable.push(burger);
  //     else available.push(burger);
  //   })
  //   // Send it to handlebars to render
  //   res.render('index', { "uneaten": available, "eaten": unavailable })
  // });
})

router.get('/ingredients', (req, res) => {
  burgers.getAll((response) => {
    let burgerArr = [];
    response.forEach((burger) => {
      burger.ingredients = setIngredients(burger);
      burgerArr.push(burger);
    })
    res.send(burgerArr);
  })
})

router.post('/', (req, res) => {
  // Create a new burger using the new Burger name
  burgers.addOne(req.body);
  // Redirect to home to re-render the page
  res.redirect("/");
})

// 'Devour' a burger of a given input
router.post('/_put/:id', (req, res) => {
  burgers.eatOne(req.params.id);
  res.status(201);
})

// Reset all the burger values to the default
router.post('/refresh', (req, res) => {
  burgers.refreshAll();
  res.status(201);
})

// Delete all rows where devoured=true
router.post('/clear/', (req, res) => {
  burgers.clearEaten();
  res.status(201);
})

module.exports = router;

//========================= Functions ============================

let setIngredients = (burger) => {
  // This will be an array with a formatted list of ingredients
  let ingredientArr = [];
  // Get an array of keys to loop over
  let keys = Object.keys(burger);
  // Skip the first four values that are not ingredients
  for (let i = 4; i < keys.length; i ++) {
    // Set variables for readability
    let ingKey = keys[i];
    let ingValue = burger[keys[i]];
    // If it is a non-boolean value (patties and buns), add it to the
    // ingredient array
    if (ingValue !== 0 && ingValue !== 1 && ingValue !== null) {
      // Add some displaay text to the bun and patty values
      if (i === 4) ingValue += " Bun";
      if (i === 5) ingValue += " Patty";
      ingredientArr.push(ingValue);
    } 
    // If it is true, add the key with some formatting to the array
    else if (ingValue === 1) {
      let capIng = ingKey.charAt(0).toUpperCase() + ingKey.slice(1);
      ingredientArr.push(capIng);
    }
  }
  // return the completed array of ingredients
  return ingredientArr;
}