var senatorsJSON = require('../senators.json');

exports.viewSenatorsJSON = function(req, res){
	res.render('senatorsJSONDisplay', senatorsJSON);
};