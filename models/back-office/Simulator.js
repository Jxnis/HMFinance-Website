const connection = require('../../db/config');

const Simulator = {};
const SimulatorIMT = {};

Simulator.get = (callback) => {
	connection.query(
		'SELECT * FROM simulatorSegSocial',
		(err, results, fields) => callback(err, results, fields)
	);
};

Simulator.edit = (simulatorEdited, callback) => {
	connection.query(
		`UPDATE simulatorSegSocial
		SET 
			taxENI=?,
			taxTI=?,
			percentageServices=?,
			percentageGoods=?,
			percentageOthers=?,
			minENICO=?,
			minTICO=?,
			minTISimplificado=?,
            revenueExemption=?,
            percentageRevenueExemption=?,
            grossWageExemption=? 			
        `, [
			simulatorEdited.taxENI,
			simulatorEdited.taxTI,
			simulatorEdited.percentageServices,
			simulatorEdited.percentageGoods,
			simulatorEdited.percentageOthers,
			simulatorEdited.minENICO,
			simulatorEdited.minTICO,
			simulatorEdited.minTISimplificado,
			simulatorEdited.revenueExemption,
			simulatorEdited.percentageRevenueExemption,
			simulatorEdited.grossWageExemption
		],
		(err, results, fields) => callback(err, results, fields)
	);
};



SimulatorIMT.get = (callback) => {
	connection.query(
		'SELECT * FROM imt',
		(err, results, fields) => callback(err, results, fields)
	);
};
SimulatorIMT.edit = (simulatorEdited, callback) => {
	connection.query(
		`UPDATE imt
		SET 
			type=?,
			location=?,
			lowEnd=?,
			highEnd=?,
			marginal=?
		WHERE
			id=?			
        `, [
			simulatorEdited.type,
			simulatorEdited.location,
			simulatorEdited.lowEnd,
			simulatorEdited.highEnd,
			simulatorEdited.marginal,
			simulatorEdited.id,
		],
		(err, results, fields) => callback(err, results, fields)
	);
}; 

module.exports = {
	Simulator,
	SimulatorIMT
};