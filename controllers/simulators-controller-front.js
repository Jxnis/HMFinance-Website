const Simulator = require('../models/simulators');

const getSimulatorInfo = (req, res, next) => {
	Simulator.getAll((err, results) => {
		if(err) {
			res.status(500).json({ message: 'Error getting all the contact information' });
		} else {
			const simulator = results;
			res.render('en/simulators', {simulator});
		}
	});
};

module.exports = {
	getSimulatorInfo
};
