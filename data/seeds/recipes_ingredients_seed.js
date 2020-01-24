
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {
          quantity: 1.25,
          recipes_id: 1,
          ingredients_id: 1
        },
        {
          quantity: 7,
          recipes_id: 2,
          ingredients_id: 2
        },
        {
          quantity: 4,
          recipes_id: 3,
          ingredients_id: 3
        },
        {
          quantity: 4,
          recipes_id: 1,
          ingredients_id: 4
        },

      ]);
    });
};
