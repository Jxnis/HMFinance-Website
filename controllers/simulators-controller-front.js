const Simulator = require('../models/simulators');

//Simulator Segurança Social
const getSimulatorInfo = (req, res, next) => {
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
					res.render('simulators', {maisValias, simulator, IMT, IStax});
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
