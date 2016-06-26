var express = require('express');
var router = express.Router();
var Product = require("../models/product").Product;

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

router.post('/resultAdd', function(req, res) {
  var newProduct = new Product({
  	nameProduct: req.body.nameProduct,
  	descriptionProduct: req.body.descriptionProduct,
  	costProduct: req.body.costProduct
  });
  newProduct.save(function(err){
	if(err){
		console.log(String(err));
	}
	res.render('result', {title: 'Producto agregado correctamente'});
  });
});

module.exports = router;
