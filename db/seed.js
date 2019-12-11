const connection = require('./config');

connection.query(`INSERT INTO user (email, passwordHash) VALUES (
    'user@user.com',
    SHA('0000')
)`, (err) => {
    if(err) console.log(err);
    console.log('query complete');
    connection.end();
})