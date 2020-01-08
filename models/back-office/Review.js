const connection = require('../../db/config');

const Review = {};

Review.add = (reviewInfo, callback) => {
	console.log('Hi');
	connection.query(
		`INSERT INTO review (name)
            VALUES (
                'Afonso'
            )
        `,
		// [reviewInfo.email, reviewInfo.password],
		(err, results, fields) => callback(err, results, fields)
	);
};

module.exports = Review;