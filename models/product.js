var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/appAnalisis");

var product_schema = new Schema({
 /* nameProduct: {type: String, required: "El nombre es obligatorio", maxlength: [60,"Nombre demasiado largo"], minlength: [4,"Nombre demasiado corto"]},
  descriptionProduct: {type: String, required: "La descripcion es obligatoria"},
  costProduct: {type: Number, min:[1, "El costo no puede ser menor a 1"]}*/
  nameProduct: String,
  descriptionProduct: String,
  costProduct: Number
});

var Product = mongoose.model("Product", product_schema);

module.exports.Product = Product;
