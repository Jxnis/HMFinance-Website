const Review = require('../../models/back-office/Review');

const addReview = (req, res) => {
	Review.add(req.body, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/reviews');
	});
};

const getReviews = (req, res) => {
	Review.get((err, results) => {
		if(err) {
			//  If an error has occurred, then the user is informed of the error
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			let reviews = results;
			res.render('back-office/review', {user: req.user, reviews});
		}		
	});
};

const editReview = (req, res) => {
	Review.edit(req.body, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard/reviews');
	});
};

// Renders the Page with the Form to add a new review
const getAddReviewPage = (req, res) => {
	res.render('back-office/addReview');
};

// Renders the Page with the Form to edit the review
const getEditReviewPage = (req, res) => {
	Review.getById(req.params.id, (err, results) => {
		if(err) return res.render('error', { err });
		let review = results[0];
		res.render('back-office/editReview', { review });
	});
};

// Deletes a review from the DB
const deleteReview = (req, res) => {
	console.log(req.params.id);
	Review.delete(req.params.id, (err) => {
		if(err) return res.render('error', { err });
		res.redirect('/dashboard/reviews');
	});
};

module.exports = {
	addReview,
	getReviews,
	editReview,
	getAddReviewPage,
	getEditReviewPage,
	deleteReview
};

