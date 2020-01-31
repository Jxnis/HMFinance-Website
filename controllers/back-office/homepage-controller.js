const Homepage = require('../../models/back-office/Homepage');

const getHomepage = (req, res) => {
	
	Homepage.get((err, results) => {
		if (err) {
			//  If an error has occurred, then the user is informed of the error
			res.status(500).json({ message: 'Error getting the homepage information' });
		} else {
			console.log('We got the homepage succefully');
			//console.log(results[0].address1);
			let homepageInfo = results[0];
			res.render('back-office/homepage', {user: req.user, homepageInfo });
		}
	});
};

const editHomepage = (req, res) => {
	//console.log(req.body);
	Homepage.edit(req.body, (err) => {
		if (err) return res.render('error', { err });
		res.redirect('/dashboard');
	});
};


module.exports = {
	getHomepage, 
	editHomepage
};