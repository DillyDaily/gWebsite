
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('admin').del(),

    // Inserts seed entries
    knex('admin').insert({first_name: "Gail", last_name: "Finney", email: "ggfinney@gmail.com", password: "$2a$10$5hTqg/oRFc9mEQaglO6QC.X6iLkDuX0XjEme61wPXTcjsQyfZQhuG"}),
    knex('admin').insert({first_name: "Ali", last_name: "Finney", email: "ali.finney@gmail.com", password: "$2a$10$5hTqg/oRFc9mEQaglO6QC.X6iLkDuX0XjEme61wPXTcjsQyfZQhuG"})

  );
};
