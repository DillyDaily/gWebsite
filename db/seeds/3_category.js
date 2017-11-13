
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('category').del(),

    // Inserts seed entries
    knex('category').insert({name: "lampwork beads", description: "handmade murano lampwork beads"}),
    knex('category').insert({name: "pmc", description: "Precious Metal Clay work"}),
    knex('category').insert({name: "jewelry", description: "finished pieces, ready to wear"})

  );
};