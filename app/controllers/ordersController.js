Q = require('q');
jwt = require('jwt-simple');
var Orders=require('./models/orders.js');

var findOrder = Q.nbind(Orders.findOne, Orders);
var createOrder = Q.nbind(Orders.create, Orders);
var findAllOrders = Q.nbind(Orders.find, Orders);

module.exports = {
  getAll: function (req, res, next) {
    findAllOrders({}).then(function(orders){
    	res.json(orders);
    });
  },
  createOrder: function(req,res,next) {
  	var username=req.body.username;
  	var email=req.body.email;
  	var phonenumber=req.body.phonenumber;
  	////we have to add the items ids which selected from the client
  	createOrder({
  		username:username,
  		email:email,
  		phonenumber:phonenumber
  	})
  	.then(function(order){
  		console.log(order);
  	});
  }
}