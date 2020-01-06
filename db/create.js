const connection = require('./config');

connection.query(`CREATE TABLE review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    commentPT TEXT(2000),
    titlePT VARCHAR(250),
    company VARCHAR(250),
    isApproved BOOLEAN DEFAULT 0,
    isShowing BOOLEAN DEFAULT 0,
    commentEN TEXT(2000),
    titleEN VARCHAR(250)
)`, (err) => {
    if(err) console.log(err);
    console.log('query complete');
    // connection.end();
})

connection.query(`CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL ,
    passwordHash VARBINARY(160) NOT NULL,
    IS_SA BOOLEAN NOT NULL
)`, (err) => {
    if(err) console.log(err);
    console.log('query complete');
    connection.end();
})

