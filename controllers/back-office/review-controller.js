const Review = require('../../models/back-office/Review');

const addReview = (req, res) => {
	Review.add(req.body, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/review');
	});
};

const getReviews = (req, res) => {
	Review.get((err, results) => {
		if(err) {
			//  If an error has occurred, then the user is informed of the error
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			console.log(results);
			let reviews = results;
			res.render('back-office/review', {user: req.user, reviews});
		}		
	});
};

const editReview = (req, res) => {
	Review.edit(req.body, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/review');
	});
};

module.exports = {
	addReview,
	getReviews,
	editReview
};

