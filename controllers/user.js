const knex = require("../db/knex.js");

module.exports = {
  // CUSTOMER EXPERIENCE
  index: function(req, res) {
      knex('product')
        .then((result)=>{

            res.render('index', {product: result});
        })
  }, 

  getAll: function(req, res) {
    knex ('product')
        .then((result)=> {

            res.render('product', {product: result});
        })
   }, 

   getOne: function(req, res) {
    
     res.send('Hello');
   }, 

   getJewelry: function(req, res) {

    res.send('Hello');
   },

   getOneJewelry: function(req, res) {

    res.sent('Hello');
   },

   addToCart: function(req, res) {
    
     res.send('Hello');
   }, 

   bio: function(req, res) {
    
     res.send('Hello');
   }, 

   contact: function(req, res) {
    
     res.send('Hello');
   }, 

   delete: function(req, res) {
    
     res.send('Hello');
   }, 
}