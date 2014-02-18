// Get all of our friend data
var senators = require('../senators.json');

exports.viewSelect = function(req, res){
	res.render('senateSelect');
};