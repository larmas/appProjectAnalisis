var express = require('express');
var router = express.Router();
var Product = require("../models/product").Product;
var User = require("../models/user").User;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Catalogo de productos' });
});

router.get('/addProduct', function(req, res){
	Product.find("nameProduct descriptionProduct costProduct",function(err,docs){
		console.log(JSON.stringify(docs));
	    res.render('addProduct', {title: 'Agregar un producto'});
	})
});

router.get('/removeProduct', function(req, res){
	res.render('removeProduct', {title: 'Eliminar un producto'})
});

router.get('/modifyProduct', function(req, res){
	res.render('modifyProduct', {title: 'Modificar un producto'})
});

router.get('/register',function(req, res){
	res.render('register', {title: 'Registrar usuario'})
});

router.get('login',function(req, res){
	res.render('login', {title: 'Iniciar sesion'})
});

router.post('/resultAdd', function(req, res) {
  var newProduct = new Product({
  	nameProduct: req.body.nameProduct,
  	descriptionProduct: req.body.descriptionProduct,
  	costProduct: req.body.costProduct
  });
  newProduct.save(function(err){
	if(err){
		console.log(String(err));
		res.render('result', {titleError: String(err)})
	}
	else{
		res.render('result', {titleCorrect: 'Producto agregado correctamente'});
	}
  });
});

router.post('/resultRegister', function(req,res){
	var newUser = new User({
		nameUser : req.body.nameUser,
		password : req.body.password
	});
	newUser.save(function(err){
		if(err){
			console.log(String(err));
			res.render('result', {titleError: String(err)});
		}
		else{
			console.log(String('Usuario registrado'));
			res.redirect('/');
		}
	})
});

router.post('/resultLogin', function(req, res){

});

router.post('/resultRemove', function(req, res) {
  	var deleteProduct = Product.findOne({nameProduct: req.body.nameProduct},function(err,docs){
	  	console.log(JSON.stringify(docs));
		deleteProduct.remove(function(err){
		if(err){
			console.log(String(err));
		}
		else{
			res.render('result', {titleCorrect: 'Producto eliminado correctamente'});
		}
		});
  	});
});

router.post('/resultModify', function(req, res){
	var conditions = {nameProduct: req.body.nameProduct},
  	updates = {$set: {
		nameProduct: req.body.newNameProduct, 
		descriptionProduct: req.body.newDescriptionProduct, 
		costProduct: req.body.newCostProduct
	}};
  	
  	Product.update(conditions, updates, function(err){
		if(err){
			console.log(String(err));
		}
		res.render('result', {titleCorrect: 'Producto modificado correctamente'});
  	})
});

module.exports = router;
