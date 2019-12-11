const connection = require('./config');

connection.query(`CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(320) NOT NULL UNIQUE,
    passwordHash VARBINARY(160) NOT NULL
)`, (err) => {
    if(err) console.log(err);
    console.log('query complete');
    connection.end();
})