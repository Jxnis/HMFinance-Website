const Translations = require('../locales/translations');

const getServices = (req, res) => {
	
	let language = '';
	let browserLang = req.language;
	let cookieLang = req.cookies.language;
	console.log(browserLang || cookieLang);
	cookieLang ? language = cookieLang : language = browserLang; 
    
	res.render('services', {translations: Translations, locale: language});
};

module.exports = {
	getServices
};
