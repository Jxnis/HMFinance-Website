const connection = require('./config');

connection.query(`INSERT INTO imt (type, location, lowEnd, highEnd, marginal) VALUES 
('Rustico','PC','0.00','0.00','0.05'),
('Rustico','RA','0.00','0.00','0.05'),
('Outros','PC','0.00','0.00','0.065'),
('Outros','RA','0.00','0.00','0.065'),
('HPP','PC','0.00','92407.00','0.00'),
('HPP','PC','92407.00','126403.00','0.02'),
('HPP','PC','126403.00','172348.00','0.05'),
('HPP','PC','172348.00','287213.00','0.07'),
('HPP','PC','287213.00','574323.00','0.08'),
('HPP','PC','574323.00','0.00','0.06'),
('HSA','PC','0.00','92407.00','0.01'),
('HSA','PC','92407.00','126403.00','0.02'),
('HSA','PC','126403.00','172348.00','0.05'),
('HSA','PC','172348.00','287213.00','0.07'),
('HSA','PC','287213.00','550836.00','0.08'),
('HSA','PC','550836.00','0.00','0.06'),
('HPP','RA','0.00','115508.75','0.00'),
('HPP','RA','115508.75','158003.75','0.02'),
('HPP','RA','158003.75','215435.00','0.05'),
('HPP','RA','215435.00','359016.25','0.07'),
('HPP','RA','359016.25','717903.75','0.08'),
('HPP','RA','717903.75','0.00','0.06'),
('HSA','RA','0.00','115508.75','0.01'),
('HSA','RA','115508.75','158003.75','0.02'),
('HSA','RA','158003.75','215435.00','0.05'),
('HSA','RA','215435.00','359016.25','0.07'),
('HSA','RA','359016.25','688545.00','0.08'),
('HSA','RA','688545.00','0.00','0.06')
`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
	// connection.end();
});


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
	'Avenida do Brasil 4,',
	'2700-129 Amadora',
	'geral@hmfinance.pt',
	'966805329',
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.3393594753975!2d-9.229967885011321!3d38.75591977959266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd05db2f959d%3A0x16d90a25b997894d!2sHM+Finance!5e0!3m2!1spt-PT!2spt!4v1488308784739'
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
	// connection.end();
});


connection.query(
	`INSERT INTO simulatorSegSocial (taxENI, taxTI, percentageServices, percentageGoods, percentageOthers, minENICO, minTICO, minTISimplificado, revenueExemption, percentageRevenueExemption, grossWageExemption) VALUES (
	0.252, 0.214, 0.7, 0.2, 0.2, 164.73, 139.88, 20, 2490, 0.7, 438.81	
)`, (err) => {
		if(err) console.log(err);
		console.log('query complete');
		// connection.end();
	}
);

connection.query(`INSERT INTO homepage (titlePT, titleEN, introPT, introEN, aboutUsPT, aboutUsEN) VALUES (
	'HMFinance',
	'HMFinance',
	'Serviços de Contablidade',
	'Accounting Services',
	'O nosso projeto teve início em 2014, com a constituição de uma equipa formada em Contabilidade, Fiscalidade, Auditoria e Gestão, pelo Instituto Superior de Contabilidade e Administração de Lisboa (ISCAL).
	O nosso quadro de pessoal caracteriza-se por ser jovem, capacitado, dinâmico e empenhado.
	Com experiência em PMEs e Multinacionais, a HM Finance está em fase de expansão, com a abertura de um novo escritório no Distrito de Setúbal.
	A qualidade dos nosso serviços e a sua satisfação motivam a nossa melhoria contínua. Atualmente, iniciamos o processo de Certificação do Sistema de Gestão de Qualidade, de acordo com a norma ISO 9001.
	Assumimos um compromisso com o seu negócio.
	Por si e para si.
	',
	'Our project began in 2014 with the establishment of a team formed in Accounting, Tax, Audit and Management at the School of Accounting and Administration of Lisbon (ISCAL).
	Our staff is characterized by being young, skilled, dynamic and committed.
	With experience in SMEs and Multinationals, HM Finance is expanding, with the opening of a new office in the Setúbal District.
	The quality of our services and your satisfaction motivates our continuous improvement. 
	We are currently beginning the Quality Management System Certification process in accordance with ISO 9001.
	We are committed to your business.
	For you and for you.'
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
	// connection.end();
});

connection.query(`INSERT INTO simulatorMaisValias(year, coeficient, taxIRS) 
	VALUES (2020, 1, 0.28),
	(2019, 1, 0.28),
	(2018, 1.01, 0.28),
	(2017, 1.02, 0.28),
	(2016, 1.02, 0.28)
`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
	connection.end();
});

