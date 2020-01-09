const Contactus = require('../../models/back-office/Contactus');

const getContactus = (req, res) => {
	
	Contactus.get((err, results) => {
		if (err) {
			//  If an error has occurred, then the user is informed of the error
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			//console.log('We got the contacts succefully');
			//console.log(results[0].address1);
			let contactInfo = results[0];
			res.render('back-office/contactus', {user: req.user, contactInfo });
		}
	});
};

module.exports = {
	getContactus
};