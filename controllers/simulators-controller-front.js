const Simulator = require('../models/simulators');

const getSimulatorInfo = (req, res, next) => {
	Simulator.getAll((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			req.simulator = results;
			next();
		}
	});
};

const getMaisValiasInfo = (req, res, next) => {
	Simulator.getMaisValias((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			console.log(results);
			const maisValias = results;
			const simulator = req.simulator;
			res.render('en/simulators', {maisValias, simulator});
		}
	});
};

module.exports = {
	getSimulatorInfo,
	getMaisValiasInfo
};
