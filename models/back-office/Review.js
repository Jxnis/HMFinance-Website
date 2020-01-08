const connection = require('../../db/config');

const Review = {};

Review.add = (reviewInfo, callback) => {
	console.log(reviewInfo);
	connection.query(
		`INSERT INTO review (name, email, commentPT, titlePT, company, commentEN, titleEN, isApproved, isShowing)
            VALUES (
                ?, ?, ?, ?, ?, ?, ?, ?, ?
            )
        `,
		[reviewInfo.name, reviewInfo.email, reviewInfo.commentPT, reviewInfo.titlePT, reviewInfo.company, reviewInfo.commentEN, reviewInfo.titleEN, reviewInfo.isApproved, reviewInfo.isShowing],
		(err, results, fields) => callback(err, results, fields)
	);
};

module.exports = Review;