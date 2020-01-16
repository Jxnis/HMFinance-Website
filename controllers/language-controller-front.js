const getBrowserLang = (req, res, next) => {
	let language = req.acceptsLanguages('pt', 'en', 'en_US');
	//console.log(language);
	language ? req.language = language : req.language = 'en';
	
	next();
};

//let language = 'Ritik';
const setCookie = (req, res) => {
	let currentPage = req.headers.referer;
	//console.log();
	res.cookie('language', req.body.language);
	//console.log(`The language ${language} was added to cookie`);
    
	res.redirect(`${currentPage}`);
};


module.exports = {
	getBrowserLang,
	setCookie
};
