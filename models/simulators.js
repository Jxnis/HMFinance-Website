const connection = require('../db/config');

const Simulator = {};

Simulator.getAll = (callback) => {
	connection.query('SELECT * FROM simulatorSegSocial',
		(err, results, fields) => callback(err, results, fields)
	);
};

Simulator.getMaisValias = (callback) => {
	connection.query('SELECT * FROM simulatorMaisValias',
		(err, results, fields) => callback(err, results, fields)
	);
};

module.exports = Simulator;