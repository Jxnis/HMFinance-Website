const connection = require('../../db/config');

const Simulator = {};

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

module.exports = Simulator;