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
    //res.json(response);
    let available = [];
    let unavailable = [];
    response.forEach(burger => {
      let burgerIngredients = setIngredients(burger);
      burger.ingredients = burgerIngredients;

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
  burgers.eatOne(req.params.id);
  res.status(201);
})

router.post('/refresh', (req, res) => {
  burgers.refreshAll();
  res.status(201);
})

router.post('/clear/', (req, res) => {
  burgers.clearEaten();
  res.status(201);
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

module.exports = router;

//================== Functions ================================


let setIngredients = (burger) => {
  let ingredientArr = [];
  let keys = Object.keys(burger);
  for (let i = 4; i < keys.length; i ++) {
    let ingKey = keys[i];
    let ingValue = burger[keys[i]];
    if (ingValue !== 0 && ingValue !== 1 && ingValue !== null) {
      ingredientArr.push(ingValue);
    } 
    else if (ingValue === 1) {
      let capIng = ingKey.charAt(0).toUpperCase() + ingKey.slice(1);
      ingredientArr.push(capIng);
    }
  }
  // ingredientArr.push(burger.patty);
  // ingredientArr.push(burger.bun);
  // if (burger.pickes) ingredientArr.push("Pickles");
  
  return ingredientArr;
}