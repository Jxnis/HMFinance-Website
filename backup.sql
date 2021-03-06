CREATE TABLE review 
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(250),
    email VARCHAR(250),
    commentPT TEXT(20000),
    titlePT VARCHAR(250),
    company VARCHAR(250),
    isApproved BOOLEAN DEFAULT 0,
    isShowing BOOLEAN DEFAULT 0,
    commentEN TEXT(20000),
    titleEN VARCHAR(250),
    PRIMARY KEY (id)
);

CREATE TABLE user (
    id INT AUTO_INCREMENT,
    email VARCHAR(250) NOT NULL ,
    passwordHash VARBINARY(160) NOT NULL,
    IS_SA BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE client (
    id INT AUTO_INCREMENT,
    name VARCHAR(250),
    logoURL VARCHAR(250),
    isShowing BOOLEAN DEFAULT 0,
    clientURL VARCHAR(250),
    PRIMARY KEY (id)
);

CREATE TABLE contactUs (
    id INT AUTO_INCREMENT,
    address1 VARCHAR(250),
    address2 VARCHAR(250),
    email VARCHAR(250),
    phone VARCHAR(250),
    locationURL VARCHAR(20000),
    PRIMARY KEY (id)
);


CREATE TABLE simulatorSegSocial (
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
);

CREATE TABLE homepage (
    id INT AUTO_INCREMENT,
    titlePT VARCHAR(250),
    introPT TEXT(20000),
    aboutUsPT TEXT(20000),
    aboutUsEN TEXT(20000),
    introEN TEXT(20000),
    titleEN VARCHAR(250),
    PRIMARY KEY (id)
);

 
CREATE TABLE imt (
    id INT AUTO_INCREMENT,
    type VARCHAR(250),
    location VARCHAR(250),
    lowEnd DECIMAL(9,2) default null,
    highEnd DECIMAL(9,2) default null,
    marginal DECIMAL(4,3),
    benefitTaxRate DECIMAL(9,2) default null,
    PRIMARY KEY (id)
); 


CREATE TABLE imtIS (
    id INT AUTO_INCREMENT,
    value DECIMAL(4,3),
    PRIMARY KEY (id)
);


CREATE TABLE simulatorMaisValias (
    id INT AUTO_INCREMENT,
    year SMALLINT,
    coeficient DECIMAL(5,2),
    taxIRS DECIMAL(4,4),
    PRIMARY KEY (id)
);



INSERT INTO imtIS (value) VALUES (0.08);
	
INSERT INTO imt (type, location, lowEnd, highEnd, marginal, benefitTaxRate) VALUES 
 ('Rustico','PC', NULL, NULL,'0.05', NULL),
 ('Rustico','RA', NULL, NULL,'0.05', NULL),
 ('Outros','PC', NULL, NULL,'0.065', NULL),
 ('Outros','RA', NULL, NULL,'0.065', NULL),
 ('HPP','PC','0.00','92407.00','0.00', '0.00'),
 ('HPP','PC','92407.00','126403.00','0.02', '1848.14'),
 ('HPP','PC','126403.00','172348.00','0.05', '5640.23'),
 ('HPP','PC','172348.00','287213.00','0.07', '9087.19 '),
 ('HPP','PC','287213.00','574323.00','0.08', '11959.32'),
 ('HPP','PC','574323.00', NULL,'0.06', '0.00'),
 ('HSA','PC','0.00','92407.00','0.01', '0.00'),
 ('HSA','PC','92407.00','126403.00','0.02', '924.07'),
 ('HSA','PC','126403.00','172348.00','0.05', '4716.16'),
 ('HSA','PC','172348.00','287213.00','0.07', '8163.12'),
 ('HSA','PC','287213.00','550836.00','0.08', '11035.25 '),
 ('HSA','PC','550836.00', NULL,'0.06', '0.00'),
 ('HPP','RA','0.00','115508.75','0.00', '0.00'),
 ('HPP','RA','115508.75','158003.75','0.02', '2310.18'),
 ('HPP','RA','158003.75','215435.00','0.05', '7050.29'),
 ('HPP','RA','215435.00','359016.25','0.07', '11358.99'),
 ('HPP','RA','359016.25','717903.75','0.08', '14949.15'),
 ('HPP','RA','717903.75', NULL,'0.06', '0.00'),
 ('HSA','RA','0.00','115508.75','0.01', '0.00'),
 ('HSA','RA','115508.75','158003.75','0.02', '1155.09'),
 ('HSA','RA','158003.75','215435.00','0.05', '5895.20'),
 ('HSA','RA','215435.00','359016.25','0.07', '10203.90'),
 ('HSA','RA','359016.25','688545.00','0.08', '13794.06'),
 ('HSA','RA','688545.00', NULL,'0.06', '0.00');


INSERT INTO user (email, passwordHash, IS_SA) VALUES (
    'hugotavaresmaia@gmail.com',
	SHA2('HMFinance!?#', 256),
	1
); 

INSERT INTO contactUs (address1, address2, email, phone, locationURL) VALUES (
	'Avenida do Brasil 4,',
	'2700-129 Amadora',
	'geral@hmfinance.pt',
	'966805329',
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.3393594753975!2d-9.229967885011321!3d38.75591977959266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd05db2f959d%3A0x16d90a25b997894d!2sHM+Finance!5e0!3m2!1spt-PT!2spt!4v1488308784739'
);


INSERT INTO simulatorSegSocial (taxENI, taxTI, percentageServices, percentageGoods, percentageOthers, minENICO, minTICO, minTISimplificado, revenueExemption, percentageRevenueExemption, grossWageExemption) VALUES (
	0.252, 0.214, 0.7, 0.2, 0.2, 164.73, 139.88, 20, 2490, 0.7, 438.81	
);


INSERT INTO homepage (titlePT, titleEN, introPT, introEN, aboutUsPT, aboutUsEN) VALUES (
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
);


INSERT INTO simulatorMaisValias(year, coeficient, taxIRS) 
	VALUES (2020, 1, 0.28),
	(2019, 1, 0.28),
	(2018, 1.01, 0.28),
	(2017, 1.02, 0.28),
	(2016, 1.02, 0.28)
;

INSERT INTO client (name, logoURL, isShowing, clientURL) 
	VALUES ('Monark', 'http://www.monark.pt/files/uploads/16.jpg', 1, 'http://www.monark.pt/'),
	('Eva Barros - Interior Design', 'http://www.evabarrosdesign.com/img/logo.svg', 1, 'http://www.evabarrosdesign.com/'),
	('Move Cycle', 'https://i.imgur.com/VPaY2F6.jpg', 1, 'https://www.moovecycle.com/'),
	('NutriStore', 'https://www.nutristore.eu/image/catalog/1%20Nutri/Logo/logo-transp-orange-black.png', 1, 'http://www.nutristore.eu/');

INSERT INTO review (name, email, commentPT, titlePT, company, isApproved, isShowing, commentEN, titleEN) 
	VALUES ('Mario Sexy', 'mario.sexy@gmail.com', 'On the West coast, 30 mins drive from Lisbon is Guincho beach. This beautiful long 1km beach is one of the best beach breaks in the area. Summer is nice and mellow, outside of this it can get punchy. You can get great rights off the cliffs to the North in the right swell. It is a bit exposed and from mid afternoon onwards can get windy and attracts kitesurfers.', 'Review da HMFinance', 'A Loja da Maria', 1, 1, 'On the West coast, 30 mins drive from Lisbon is Guincho beach. This beautiful long 1km beach is one of the best beach breaks in the area. Summer is nice and mellow, outside of this it can get punchy. You can get great rights off the cliffs to the North in the right swell. It is a bit exposed and from mid afternoon onwards can get windy and attracts kitesurfers.', 'Review HM Finance');