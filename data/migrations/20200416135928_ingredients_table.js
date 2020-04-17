exports.up = function(knex) {
  return knex.schema.createTable('ingredients', function(ingredients) {
   ingredients.increments();
   ingredients.string('name').nullable();
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients')
};
//its working