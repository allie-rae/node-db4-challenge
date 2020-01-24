
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          title: 'Perfect Green Beans',
          instructions: 'Mix butter in.'
        },
        {
          id: 2,
          title: 'Baked Pumpkin',
          instructions: 'Put pumpkin into oven'
        },
        {
          id: 3,
          title: 'Sweet Potato Fries',
          instructions: 'All fries are good fries.'
        }
      ]);
    });
};
