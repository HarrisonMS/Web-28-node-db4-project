const express = require('express')

const router = express.Router();

const Ingredients = require('./ingredients-model');

router.use(express.json())

router.get(`/`, (req, res) => {
  Ingredients.find(req.query)
  .then(ingredients => {
    if(ingredients) {
      res.status(200).json({data: ingredients})
    }
      res.status(400).json({message: 'there are no ingredients in the database'})
  })
  .catch(error => {
      console.log(error);
      res.status(500).json({message: "error retrieving cars from data base"})
  })
})

module.exports = router