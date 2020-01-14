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

Review.get = (callback) => {
	connection.query(
		'SELECT * FROM review',
		(err, results, fields) => callback(err, results, fields)
	);
};

Review.edit = (reviewEdited, callback) => {
	connection.query(
		`UPDATE review
		SET 
			name=?,
			email=?,
			commentPT=?,
			titlePT=?,
			company=?,
			isApproved=?,
			isShowing=?,
			commentEN=?,
			titleEN=?
		WHERE id=? 			
        `,
		[reviewEdited.body.name, reviewEdited.body.email, reviewEdited.body.commentPT, reviewEdited.body.titlePT, reviewEdited.body.company, reviewEdited.body.isApproved, reviewEdited.body.isShowing, reviewEdited.body.commentEN, reviewEdited.body.titleEN, reviewEdited.params.id],
		(err, results, fields) => callback(err, results, fields)
	);
};

Review.getById = (reviewId, callback) => {
	connection.query(
		`SELECT * FROM review
		WHERE id=?	
		`, reviewId,
		(err, results, fields) => callback(err, results, fields)
	);
};

Review.delete = (reviewId, callback) => {
	// console.log(reviewId);
	connection.query(
		`DELETE FROM review
		WHERE id=?
		`, reviewId,
		(err, results, fields) => callback(err, results, fields)		
	);
};

module.exports = Review;