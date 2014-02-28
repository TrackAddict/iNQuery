var lawsgallery = require('../laws.json');

exports.viewLawsGallery = function(req, res){
	res.render('lawsgallery', lawsgallery);
};