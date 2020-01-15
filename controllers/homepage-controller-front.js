const Homepage = require('../models/homepage');
const Translations = require('../locales/translations');

const getAllInfo = (req, res, next) => {
	Homepage.getAll((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			console.log(results);
			const data = results;
			// res.render('en/index', {data});

			res.render('en/index', {data, translations: Translations, locale: 'en'});
		}
	});
};

module.exports = {
	getAllInfo
};
