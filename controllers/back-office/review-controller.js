const Review = require('../../models/back-office/Review');

const addReview = (req, res) => {
	console.log('controller');
	Review.add(req.body, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/review');
	});
};

module.exports = {
	addReview
};