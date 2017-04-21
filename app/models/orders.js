var Q = require('q');
var mongoose = require('mongoose');
var items=require('');

var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
	username: {
	    type: String,
	    unique: true,
	    required: true
  	},
    email:{
    	type:String,
    	required:true
    },
    phonenumber:{
    	type:String,
    	required:true
    },
    deleivered:{
    	type:Number,
    	default:0
    },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

var Order = mongoose.model('Order', OrderSchema);
module.exports = Order;