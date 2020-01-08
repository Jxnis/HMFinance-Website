const connection = require('../../db/config');

const Review = {};

Review.add = (reviewInfo, callback) => {
<<<<<<< HEAD
	console.log('Hi');
	connection.query(
		`INSERT INTO review (name)
=======
	console.log(reviewInfo);
	connection.query(
		`INSERT INTO review (name, email, commentPT, titlePT, company, commentEN, titleEN, isApproved, isShowing)
>>>>>>> cdb720ec5c770998eb2c45f6bb3ac63b0c0740fe
            VALUES (
                ?, ?, ?, ?, ?, ?, ?, ?, ?
            )
        `,
		[reviewInfo.name, reviewInfo.email, reviewInfo.commentPT, reviewInfo.titlePT, reviewInfo.company, reviewInfo.commentEN, reviewInfo.titleEN, reviewInfo.isApproved, reviewInfo.isShowing],
		(err, results, fields) => callback(err, results, fields)
	);
};

module.exports = Review;