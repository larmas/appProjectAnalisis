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

router.post('/resultRemove', function(req, res) {
  var deleteProduct = Product.findOne({nameProduct: req.body.nameProduct},function(err,docs){
  });
  deleteProduct.remove(function(err){
	if(err){
		console.log(String(err));
	}
	res.render('result', {title: 'Producto eliminado correctamente'});
  });
});

router.get('/resultModify', function(req, res){
	var conditions = {nameProduct: req.body.nameProduct}, 
	updates = { $set: {nameProduct: req.body.newNameProduct, descriptionProduct: req.body.newDescriptionProduct, costProduct: req.body.newCostProduct}};
  	
  	
  	Product.update(conditions, updates, function(err, numAffected){
		if(err){
			console.log(String(err));
		}
		res.render('result', {title: 'Producto modificado correctamente'});
		//res.send(numAffected);
  	})
  	/*Product.findOne(conditions, function(err,doc){
  		doc.nameProduct= req.body.newNameProduct;
  		doc.descriptionProduct= req.body.newDescriptionProduct;
  		doc.costProduct= req.body.newCostProduct;
  		doc.save();
  		res.render('result', {title: 'Producto modificado correctamente'});
  	});*/
});

module.exports = router;
