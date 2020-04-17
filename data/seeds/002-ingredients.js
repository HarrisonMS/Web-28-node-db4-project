
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'bread'},
        { name: 'butter'},
        { name: 'peanut butter'},
        { name: 'jelly'},
        { name: 'cinnamon surgar mix'}
      ]);
    });
};
// its seeeeeding!!!!