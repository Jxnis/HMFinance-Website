const Homepage = require('../models/homepage');
const Translations = require('../locales/translations');


const getBrowserLang = (req, res, next) => {
	let language = req.acceptsLanguages('pt', 'en', 'en_US');
	//console.log(language);
	language ? req.language = language : req.language = 'en';
	
	next();
};

const getAllInfo = (req, res) => {
	console.log(req.params);
	let langBrowser = req.language;
	Homepage.getAll((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			//console.log(results);
			const data = results;
			// res.render('en/index', {data});

			res.render('index', {data, translations: Translations, locale: langBrowser});
		}
	});
};

module.exports = {
	getBrowserLang,
	getAllInfo
};
