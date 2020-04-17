
exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredients', function(r_i) {
    r_i.increments();
    r_i.float('quantity').notNullable();
    r_i.string('unit_measurement', 128).notNullable();
    r_i
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
    r_i
      .integer('ingredient_id')
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
};
