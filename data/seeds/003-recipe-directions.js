
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_directions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_directions').insert([
        {recipe_id: 4, step: 1, description: 'put toast in toaster'},
        {recipe_id: 4, step: 2, description: 'that is it you have toast'},
        {recipe_id: 5, step: 1, description: 'jelly on bread then peanut butter on other side'},
        {recipe_id: 5, step: 2, description: 'put together now you have pb&j'},
        {recipe_id: 6, step: 1, description: 'its cinnamon toast figure it out'}
      ])
    });
};