var Q = require('q');
var mongoose = require('mongoose');

var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;

var ClientSchema = new mongoose.Schema({
	clientName: {
	    type: String,
	    required: true
  	}
});

var Client = mongoose.model('Client', ClientSchema);
module.exports = Client;