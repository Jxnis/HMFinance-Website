const connection = require('../../db/config');

const Contactus = {};

Contactus.get = (callback) => {
	connection.query(
		'SELECT * FROM contactUs',
		(err, results, fields) => callback(err, results, fields)
	);
};

Contactus.edit = (ContactUpdated, callback) => {
	console.log(ContactUpdated.id);
	connection.query('UPDATE contactUs SET address1=?, address2=?, email=?, phone=?, locationURL=? WHERE id=?',
		[ContactUpdated.address1, ContactUpdated.address2, ContactUpdated.email, ContactUpdated.phone, ContactUpdated.locationURL, ContactUpdated.id],
		(err, res, fields) => callback(err, res, fields) 
	);
};


module.exports = Contactus;