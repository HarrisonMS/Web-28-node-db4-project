const express = require("express");

const router = express.Router();

const Recipes = require("./recipes-model");

router.use(express.json());

router.get(`/`, (req, res) => {
  Recipes.find(req.query)
  .then(recipes => {
    if(recipes) {
      res.status(200).json({data: recipes})
    }
      res.status(400).json({message: 'there are no recipes in the database'})
  })
  .catch(error => {
      console.log(error);
      res.status(500).json({message: "error retrieving recipes from data base"})
  })
})

router.get('/:id/directions', (req, res) => {
  const { id } = req.params;

  Recipes.findById(id)
  .then(directions => {
    if (directions.length) {
      res.json({directions: directions});
    } else {
      res.status(404).json({ message: 'Could not find directions for given recipe id' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get directions for given recipe id' });
  });
});
module.exports = router;