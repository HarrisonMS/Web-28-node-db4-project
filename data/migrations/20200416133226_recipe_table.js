
exports.up = function(knex) {
  return knex.schema.createTable('recipes', function(recipes) {
    recipes.increments();
    recipes.string('name').nullable().unique();
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes')
};
