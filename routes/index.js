var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Catalogo de productos' });
});

router.get('/addProduct', function(req, res, next){
	res.render('addProduct', {title: 'Agregar un producto'})
});

router.get('/deleteProduct', function(req, res, next){
	res.render('removeProduct', {title: 'Eliminar un producto'})
});

router.get('/modifyProduct', function(req, res, next){
	res.render('modifyProduct', {title: 'Modificar un producto'})
});

module.exports = router;
