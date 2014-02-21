var senators = require('../senators.json');

exports.viewGallery = function(req, res){
	res.render('gallery', senators);
};