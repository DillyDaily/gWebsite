
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('product').del(),

    // productts seed ries

    knex('product').insert({name: "SisterBeads", description: "A lampwork bead necklace made with love", image: "https://pre00.deviantart.net/93cc/th/pre/f/2017/306/e/e/eeb941ac1087d52717c87c9e38526c17-dbsi5x9.jpg", quantity: 7, price: 50.75, sales_tax: .056, category_id:1}),
    knex('product').insert({name: "Ocean Beads", description: "An ocean of blues and greens", image: "https://pre00.deviantart.net/0f2d/th/pre/f/2017/306/b/6/b6821b5a76d8414c5033f9e35e4f6e5b-dbsi5tc.jpg", quantity: 1, price: 350.99, sales_tax: .056, category_id:1}),
    knex('product').insert({name: "Red Disks", description: "Perfectly graded", image: "https://pre00.deviantart.net/c1c4/th/pre/f/2017/306/6/4/6468bf320940a2b3a7aa2e411e586ad1-dbsi5vc.jpg", quantity: 14, price: 50.89, sales_tax: .056, category_id:1}),
    knex('product').insert({name: "Impressionable Earrings", description: "PMC Earrings", image: "https://pre00.deviantart.net/69a6/th/pre/f/2017/306/6/c/6c0386ee8fd0cd5d659dc235c55fd5bc-dbsi5ut.jpg", quantity: 1, price: 450.55, sales_tax: .056, category_id:2}),
    knex('product').insert({name: "Swirly Whirly", description: "Lampwork with metal", image: "https://pre00.deviantart.net/0c07/th/pre/f/2017/306/d/7/d75e8ae514a07db0b0831cd197dc99a4-dbsi5vq.jpg", quantity: 1, price: 350.45, sales_tax: .056, category_id:3}),
    knex('product').insert({name: "Purple Heart", description: "Bold and beautiful", image: "https://pre00.deviantart.net/d169/th/pre/f/2017/306/3/3/335333a3709a0eb42938727cd90169fb-dbsi5tz.jpg", quantity: 1, price: 650.67, sales_tax: .056, category_id:1}),
    knex('product').insert({name: "Drawn Daisy", description: "Pencil sketch and painting wrap", image: "https://pre00.deviantart.net/f408/th/pre/f/2017/306/4/e/4e8609663a26bc4aba36f3431d9c607f-dbsi5rq.jpg", quantity: 2, price: 175.59, sales_tax: .056, category_id:1}),
    knex('product').insert({name: "Fireworks", description: "Charcoal on murano beads", image: "https://pre00.deviantart.net/a137/th/pre/f/2017/306/9/2/9299bcca128d0bfb01f0729bad668804-dbsi5t7.jpg", quantity: 12, price: 75.67, sales_tax: .056, category_id:1})
    

  );
};
