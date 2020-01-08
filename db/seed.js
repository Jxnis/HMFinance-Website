const connection = require('./config');

connection.query(`INSERT INTO user (email, passwordHash, IS_SA) VALUES (
    'hugotavaresmaia@gmail.com',
	SHA2('HMFinance!?#', 256),
	1
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
	connection.end();
});
