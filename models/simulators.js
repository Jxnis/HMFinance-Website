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

Simulator.getIMTIS = (callback) => {
	connection.query('SELECT * FROM imtIS',
		(err, results, fields) => callback(err, results, fields)
	);
};
Simulator.getIMT = (callback) => {
	connection.query('SELECT * FROM imt',
		(err, results, fields) => callback(err, results, fields)
	);
};

module.exports = Simulator;