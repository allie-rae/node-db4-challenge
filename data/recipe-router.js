const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });

  router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
    .then(recipe => {
      res.json(recipe.instructions);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get instructions' });
    });
  });

  router.get('/:id/shoppingList', (req, res) => {
    Recipes.getShoppingList(req.params.id)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Failed to get shopping list' });
    });
  });

  module.exports = router;