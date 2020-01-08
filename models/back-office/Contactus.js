const connection = require('../../db/config');

const Contactus = {};

Contactus.get = (callback) => {
	connection.query(
		'SELECT * FROM contactUs',
		(err, results, fields) => callback(err, results, fields)
	);
};

module.exports = Contactus;