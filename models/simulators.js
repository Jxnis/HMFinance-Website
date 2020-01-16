const connection = require('../db/config');

const Simulator = {};

Simulator.getAll = (callback) => {
	console.log('model simulator');
	connection.query('SELECT * FROM simulatorSegSocial',
		(err, results, fields) => callback(err, results, fields)
	);
};

module.exports = Simulator;