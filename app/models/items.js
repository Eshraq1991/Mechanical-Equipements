var Q = require('q');
var mongoose = require('mongoose');

var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema({
	itemName: {
	    type: String,
	    required: true
  	},
    description:{
    	type:String,
    	required:true
    },
    quantityInStore:{
    	type:Number,
    	required:true
    },
    unitPrice:{
        type:Number,
        required:true
    }
});

var Item = mongoose.model('Item', ItemSchema);
module.exports = Item;