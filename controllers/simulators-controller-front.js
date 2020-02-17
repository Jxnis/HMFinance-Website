const Simulator = require('../models/simulators');
const Translations = require('../locales/translations');


//Simulator Segurança Social
const getSimulatorInfo = (req, res, next) => {
	//console.log('getSimulatorInfo called');
	Simulator.getAll((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the Segurança Social data' });
		} else {
			req.segurancaSocial = results;
			next();
		}
	});
};

//Simulator Mais Valias
const getMaisValiasInfo = (req, res, next) => {
	//console.log('getMaisValiasInfo called');
	Simulator.getMaisValias((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the Mais Valias data' });
		} else {
			//console.log(results);
			req.maisValias = results;
			next();
		}
	});
};

const getimtInfo = (req, res) => {

	//we need to set the language as the browser language or the language coming from the cookies
	let language = '';
	let browserLang = req.language;
	let cookieLang = req.cookies.language;
	cookieLang ? language = cookieLang : language = browserLang; 
	//console.log('language: ', language);

	//console.log('getimtInfo called');
	Simulator.getIMTIS((err, resultsIMT) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			const IStax = resultsIMT;
			Simulator.getIMT((err, results) => {
				if(err) {
					res.status(500).json({ message: 'Error getting all the contact information' });
				} else {
					//console.log(results);
					const maisValias = req.maisValias;
					const simulator = req.segurancaSocial;
					const IMT = results;
					res.render('simulators', {maisValias, simulator, IMT, IStax, translations: Translations, locale: language });
				}
			});
		}
	});
};

module.exports = {
	getSimulatorInfo,
	getMaisValiasInfo,
	getimtInfo
};
