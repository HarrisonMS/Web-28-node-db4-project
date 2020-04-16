
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 4, ingredient_id: 1, quantity: 2, unit_measurement: 'pieces'},
        {recipe_id: 5, ingredient_id: 1, quantity: 2, unit_measurement: 'pieces'},
        {recipe_id: 5, ingredient_id: 3, quantity: 1, unit_measurement: 'preference'},
        {recipe_id: 5, ingredient_id: 4, quantity: 1, unit_measurement: 'preference'},
        {recipe_id: 6, ingredient_id: 1, quantity: 2, unit_measurement: 'pieces'},
        {recipe_id: 6, ingredient_id: 2, quantity: 2.5, unit_measurement: 'tablespoons or preference'},
        {recipe_id: 6, ingredient_id: 5, quantity: 3.5, unit_measurement: 'tablespoons or preference'}
      ])
    });
};
/// it seeeeeeded