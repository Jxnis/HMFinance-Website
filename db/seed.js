const connection = require('./config');

connection.query(`INSERT INTO user (email, passwordHash, IS_SA) VALUES (
    'hugotavaresmaia@gmail.com',
	SHA2('HMFinance!?#', 256),
	1
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
	// connection.end();
});

connection.query(`INSERT INTO contactUs (address1, address2, email, phone, locationURL) VALUES (
	'Avenida do Brasil 4, 2700-129 Amadora',
	'',
	'geral@hmfinance.pt',
	'966805329',
	'https://goo.gl/maps/1S3iJ1RMu6c85fuHA'
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
	// connection.end();
});

connection.query(
	`INSERT INTO simulatorSegSocial (taxENI, taxTI, percentageServices, percentageGoods, percentageOthers, minENICO, minTICO, minTISimplificado, revenueExemption, percentageRevenueExemption, grossWageExemption) VALUES (
	0.252, 0.214, 0.7, 0.2, 0.2, 164.73, 139.88, 20, 2490, 0.7, 435.76	
	)`, (err) => {
		if(err) console.log(err);
		console.log('query complete');
		connection.end();
});