"use strict"

const express = require('express');


// Import express and the Burger constructor


// Create the router
let router = express.Router();

router.get('/', (req, res) => {
  res.send("Routed");
})

module.exports = router;