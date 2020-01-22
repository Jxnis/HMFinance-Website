const connection = require('./config');

connection.query(`CREATE TABLE review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250),
    email VARCHAR(250),
    commentPT TEXT(20000),
    titlePT VARCHAR(250),
    company VARCHAR(250),
    isApproved BOOLEAN DEFAULT 0,
    isShowing BOOLEAN DEFAULT 0,
    commentEN TEXT(20000),
    titleEN VARCHAR(250)
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
});

connection.query(`CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(250) NOT NULL ,
    passwordHash VARBINARY(160) NOT NULL,
    IS_SA BOOLEAN NOT NULL DEFAULT 0
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
});

connection.query(`CREATE TABLE client (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250),
    logoURL VARCHAR(250),
    isShowing BOOLEAN DEFAULT 0,
    clientURL VARCHAR(250)
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
});

connection.query(`CREATE TABLE contactUs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address1 VARCHAR(250),
    address2 VARCHAR(250),
    email VARCHAR(250),
    phone VARCHAR(250),
    locationURL VARCHAR(2000)
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
});

connection.query(`CREATE TABLE simulatorSegSocial (
    taxENI DECIMAL(4,4),
    taxTI DECIMAL(4,4),
    percentageServices DECIMAL(4,4),
    percentageGoods DECIMAL(4,4),
    percentageOthers DECIMAL(4,4),
    minENICO DECIMAL(9,2),
    minTICO DECIMAL(9,2),
    minTISimplificado DECIMAL(9,2),
    revenueExemption DECIMAL(9,2),
    percentageRevenueExemption DECIMAL(4,4),
    grossWageExemption DECIMAL(9,2)
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
});

connection.query(`CREATE TABLE homepage (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titlePT VARCHAR(250),
    introPT TEXT(20000),
    aboutUsPT TEXT(20000),
    aboutUsEN TEXT(20000),
    introEN TEXT(20000),
    titleEN VARCHAR(250)
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
});

connection.query(`CREATE TABLE simulatorMaisValias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    year SMALLINT,
    coeficient DECIMAL(5,2),
    taxIRS DECIMAL(4,4)
)`, (err) => {
	if(err) console.log(err);
	console.log('query complete');
	connection.end();
});

