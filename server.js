"use strict"

// Set up the app
const express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

// Load body parsing package
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Load the router
const routes = require('./controllers/burger_controller.js')
app.use("/", routes);

// Set up handlebars
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Hey! Listen!
app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
})


// Testing area
// const burger = require('./models/burger.js')
// let myBurger = new burger("chezberger");

// myBurger.q.selectAll(function(data) {
//   data.forEach( (burger) => {
//     console.log(burger.burger_name);
//   })
// });

// myBurger.q.insertOne("Whopper", function(response) {
//   console.log(`Burger ID# ${response} created`);
// });