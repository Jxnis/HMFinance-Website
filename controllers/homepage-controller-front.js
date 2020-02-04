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
			// data is all the text that is coming from the db
			const data = results;
			//res.json({data});
			
			// we need to split the aboutUs text coming from the data into 4 smaller pieces of code to send it to the index
			let PTaboutUS = data.homepage[0].aboutUsPT.split('.');
			//console.log(`PTaboutUS part1 ${PTaboutUS[0]}\n PTaboutUS part2 ${PTaboutUS[1]}\n PTaboutUS part3 ${PTaboutUS[2]}\n PTaboutUS part4 ${PTaboutUS[3]} `);
			let ENaboutUS = data.homepage[0].aboutUsEN.split('.');
			//console.log(`ENaboutUS part1 ${ENaboutUS[0]}\n ENaboutUS part2 ${ENaboutUS[1]}\n ENaboutUS part3 ${ENaboutUS[2]}\n ENaboutUS part4 ${ENaboutUS[3]} `);

			console.log('here:',data)
			// data is all the text that is coming from the db
			// PTaboutUS and ENaboutUS are split into 2 arrays of 4 parts, to access each part of them in the index.pug do for example ENaboutUS[2]
			// translations is all the text that is coming from the object translations.js and has all the text that is in the website that isn't coming from the db
			// locale is the language in which the website is going to be showed (it can only be pt or en)
			res.render('index', {data, PTaboutUS, ENaboutUS, translations: Translations, locale: language });
		}
	});
};

const renderPrivacyPage = (req, res) => {
	res.render('privacy-policy');
};

module.exports = {
	getAllInfo,
	renderPrivacyPage
};
