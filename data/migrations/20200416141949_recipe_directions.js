
exports.up = function(knex) {
  return knex.schema.createTable('recipe_directions', function(r_d) {
    r_d.increments();
    r_d.integer('step').notNullable().unique();
    r_d.string('description').notNullable();
    r_d 
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_directions')
};
//its workinggg!!!!!!