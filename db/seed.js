const connection = require('./config');


/* connection.query(`INSERT INTO user (email, passwordHash, IS_SA) VALUES (
    'hugotavaresmaia@gmail.com',
	SHA2('HMFinance!?#', 256),
	1
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
	connection.end();
}); */

connection.query(`INSERT INTO contactUs (address1, address2, email, phone, locationURL) VALUES (
	'Avenida do Brasil 4, 2700-129 Amadora',
	'',
	'geral@hmfinance.pt',
	'966805329',
	'https://goo.gl/maps/1S3iJ1RMu6c85fuHA'
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
	connection.end();
});
