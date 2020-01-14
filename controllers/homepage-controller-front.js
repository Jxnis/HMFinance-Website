const Homepage = require('../models/homepage');

const getAllInfo = (req, res, next) => {
	Homepage.getAll((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			console.log(results);
			const data = results;
			res.render('en/index', {data});
		}
	});
};

module.exports = {
	getAllInfo
};
