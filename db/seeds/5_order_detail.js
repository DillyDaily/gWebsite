
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('order_detail').del(),

    // customer_ide ,d 7, category_id:1}),

    knex('order_detail').insert({customer_id: 1, product_id: 1, item_name: "beads1", quantity: 1, price: 50.00, description: "I love beads"}),
    knex('order_detail').insert({customer_id: 2, product_id: 2, item_name: "beads2", quantity: 4, price: 75.00, description: "collecting fine jewelry"}),
    knex('order_detail').insert({customer_id: 3, product_id: 3, item_name: "beads3", quantity: 2, price: 150.00, description: "this is my favorite local artist"}),
    knex('order_detail').insert({customer_id: 4, product_id: 4, item_name: "beads4", quantity: 2, price: 350.00, description: "adding a beautiful piece to my collection"})


  );
};
