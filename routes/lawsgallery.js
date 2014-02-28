var senators = require('../senators.json');

exports.viewLawsGallery = function(req, res){
	res.render('lawsgallery', senators);
};