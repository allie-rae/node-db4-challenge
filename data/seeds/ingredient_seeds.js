
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          id: 1,
          name: 'cups of butter'
        },
        {
          id: 2,
          name: 'extra large pumpkin'
        },
        {
          id: 3,
          name: 'sweet potatoes'
        },
        {
          id: 4,
          name: 'cups of green beans'
        }
      ]);
    });
};
