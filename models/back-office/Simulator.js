const connection = require('../../db/config');

const Simulator = {};
const SimulatorIMT = {};

Simulator.get = (callback) => {
	connection.query(
		'SELECT * FROM simulatorSegSocial',
		(err, results, fields) => callback(err, results, fields)
	);
};

Simulator.getMaisValias = (callback) => {
	connection.query(
		'SELECT * FROM simulatorMaisValias',
		(err, results, fields) => callback(err, results, fields)
	);
};

Simulator.editMaisValias = (maisValiasEdited, callback) =>  {
	connection.query(`
		TRUNCATE TABLE simulatorMaisValias
	`, 
	(err) => {
		if(err) {
			callback(err);
		} else {
			connection.query(
				`INSERT INTO  simulatorMaisValias
				(year, coeficient, taxIRS)
				VALUES
					(?, ?, ?),
					(?, ?, ?),
					(?, ?, ?),
					(?, ?, ?),
					(?, ?, ?)
			   `, [
					maisValiasEdited.year[0],
					maisValiasEdited.coeficient[0],
					maisValiasEdited.taxIRS[0],
					maisValiasEdited.year[1],
					maisValiasEdited.coeficient[1],
					maisValiasEdited.taxIRS[1],
					maisValiasEdited.year[2],
					maisValiasEdited.coeficient[2],
					maisValiasEdited.taxIRS[2],
					maisValiasEdited.year[3],
					maisValiasEdited.coeficient[3],
					maisValiasEdited.taxIRS[3],
					maisValiasEdited.year[4],
					maisValiasEdited.coeficient[4],
					maisValiasEdited.taxIRS[4]
				],
				(err, results, fields) => callback(err, results, fields)
			);		
		}
	});
	
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
	//let resultQuery = '';
	//debugger;
	for (let i = 0 ; i < simulatorEdited.type.length; i++) {
		//console.log(simulatorEdited.type[i]);
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
				simulatorEdited.type[i],
				simulatorEdited.location[i],
				simulatorEdited.lowEnd[i],
				simulatorEdited.highEnd[i],
				simulatorEdited.marginal[i],
				simulatorEdited.id[i]
			],
			(err) => {
				if(err) callback(err);
			}
			//(err) => console.log(err)

		);
	}
	callback(null);

}; 

module.exports = {
	Simulator,
	SimulatorIMT
};