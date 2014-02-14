// Get all of our friend data
var senators = require('../senators.json');

exports.view = function(req, res){
	console.log(senators);
	res.render('results', data);
};