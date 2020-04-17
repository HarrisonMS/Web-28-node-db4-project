const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
}

function find() {
  return db('recipes')
}
function findById(id) {
  return db('recipe_directions as rd')
    .select('rd.id as stepId', 'rd.step', 'rd.description')
    .join('recipes as r', 'rd.recipe_id', 'r.id')
    .where('r.id', id)
    .orderBy('rd.id', 'asc');
}