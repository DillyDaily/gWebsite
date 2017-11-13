
exports.up = function(knex, Promise) {
    return knex.schema.createTable('product', (table)=>{
        table.increments();
        table.integer('category_id')
        .references('id')
        .inTable('category')
        .onDelete('CASCADE')
        .index();
        table.string('name');
        table.text('description');
        table.string('image');
        table.integer('quantity');
        table.decimal('price');
        table.decimal('sales_tax');
        
        table.timestamps(true, true);
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('product');
};
