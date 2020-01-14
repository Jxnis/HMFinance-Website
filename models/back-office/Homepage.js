const connection = require('../../db/config');

const Homepage = {};

Homepage.get = (callback) => {
	connection.query(
		'SELECT * FROM homepage',
		(err, results, fields) => callback(err, results, fields)
	);
};


Homepage.edit = (homepageInfo, callback) => {
	console.log(homepageInfo.id);
	connection.query('UPDATE homepage SET titlePT=?, titleEN=?, introPT=?, introEN=?, aboutUsPT=?, aboutUsEN=? WHERE id=?',
		[homepageInfo.titlePT, homepageInfo.titleEN, homepageInfo.introPT, homepageInfo.introEN, homepageInfo.aboutUsPT, homepageInfo.aboutUsEN, homepageInfo.id],
		(err, res, fields) => callback(err, res, fields) 
	);
};


module.exports = Homepage;