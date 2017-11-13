//Update the name of the controller below and rename the file.
const admin = require("../controllers/admin.js");
const user = require("../controllers/user.js");


module.exports = function(app){
  app.use(cartCheck);
  
  // USER EXPERIENCE
  app.get('/', user.index);

  app.get('/beads', user.getAll);

  app.get('/beads/:id', user.getOne);

  app.get('/jewelry', user.getJewelry);

  app.get('/jeweelry/:id', user.getOneJewelry);

  app.get('/cart:id', user.addToCart);

  app.get('/bio', user.bio);

  app.get('/contact', user.contact);

  // ADMIN EXPERIENCE
  app.get('/admin_login', admin.login);

  app.get('/admin', admin.index);

  app.get('/add', admin.addOne);

  app.post('/add', admin.create);

  app.get('/edit/:id', admin.edit);

  app.post('/edit/:id', admin.update);

  app.get('/delete/:id', admin.delete);


  // USER SESSION FUNCTION
  function userAuth(req, res, next){
    if(req.session.user || req.session.admin){
      next();
    }else{
      res.redirect("/");
    }
  }

  // ADMIN SESSION FUNCTION
  function adminAuth(req,res,next){
    if(req.session.admin){
      next();
    }else{
      res.redirect('/');
    }
  }
  function cartCheck(req, res, next){
    if(!req.session.cart){
      req.session.cart = [];
      req.session.save(()=>{
        next();
      })
    }else{
      next();
    }
  }


  app.use(function(req, res){

      res.render('404');
    })
  }
