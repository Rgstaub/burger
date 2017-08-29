"use strict"

// Call dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// Set up the app


// Connect the database


// Set up handlebars


// Listen



// Testing area
const burger = require('./models/burger.js')
let myBurger = new burger();

myBurger.q.insertOne("delicious");

let uneaten = []
console.log(myBurger.q.selectAll(false));

uneaten.forEach((burger) => {
  console.log(burger.burger_name);
})