var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/appAnalisis");

var product_schema = new Schema({
	nameUser : {
			type: String,
			required : "El nombre es obligatorio", 
  			maxlength : [60,"Nombre demasiado largo"], 
  			minlength : [4,"Nombre demasiado corto"]},
  	password : {
  			type : String,
  			required : "El password es obligatorio",
  			maxlength : [12, "Password demasiado largo"],
  			minlength : [6, "Password demasiado corto"],
  	}
});