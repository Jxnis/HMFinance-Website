const connection = require('../db/config');

const Homepage = {};

Homepage.getAll = (callback) => {
	let clients;
	let contactUs;
	let homepage;
	let review;
	connection.query(
		'SELECT * FROM client',
		(err, results) => {
			if(err) {
				callback(err);
			} else {
				clients=results;
				connection.query('SELECT * FROM contactUs',
					(err, results) => {
						if(err) {
							callback(err);
						} else {
							contactUs=results;
							connection.query('SELECT * FROM homepage', 
								(err,results) => {
									if(err) {
										callback(err);
									} else {
										homepage=results;
										connection.query('SELECT * FROM review',
											(err, results) => {
												if(err){
													callback(err);
												} else {
													review=results;
													callback(err, {review, homepage, contactUs, clients});
												}
											}
										);
									}
								}
							);
						}
					});
			}}
	);
};


module.exports = Homepage;