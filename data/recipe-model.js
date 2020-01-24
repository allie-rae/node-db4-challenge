const db = require('./db-config');

/* getRecipes(): should return a list of all recipes in the database.

getShoppingList(recipe_id): should return a list of all ingredients 
and quantities for a given recipe

getInstructions(recipe_id): should return a list of 
step by step instructions for preparing a recipe */

module.exports = {
    getRecipes,
    getInstructions,
    getShoppingList
}

function getRecipes() {
    return db('recipes');
}

function getInstructions(recipe_id) {
    return db('recipes')
    .where({ id: recipe_id })
    .first();
}

function getShoppingList(recipe_id) {
    return db('recipes_ingredients')
    .where({ recipes_id: recipe_id})
    .join('ingredients', 'recipes_ingredients.ingredients_id', 'ingredients.id')
    .select('ingredients.name', 'recipes_ingredients.quantity');
}
