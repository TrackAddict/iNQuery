
var buttons = require('../buttons.json');

exports.view = function(req, res){
	res.render('index', buttons);
};