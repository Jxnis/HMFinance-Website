/* eslint-disable no-mixed-spaces-and-tabs */
const Homepage = require('../models/homepage');
const Translations = require('../locales/translations');


const getAllInfo = (req, res) => {
	//console.log(req.cookies.language);
	let language = '';
	let browserLang = req.language;
	let cookieLang = req.cookies.language;
	cookieLang ? language = cookieLang : language = browserLang; 
	//console.log(language);
	
	Homepage.getAll((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			//console.log(results);
			const data = results;
			// res.render('en/index', {data});
			// res.json({data});
			// console.log(data);
			console.log('data', data);
			res.render('index', {data, translations: Translations, locale: language });
		}
	});
};

module.exports = {
	getAllInfo
};
