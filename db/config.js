const  mysql = require('mysql');
const keys = require('../keys');

const dbOptions = {
	host: 'localhost',
	user: keys.MYSQL_USERNAME,
	pass: keys.MYSQL_PASSWORD,
	db: keys.MYSQL_DB_NAME,
};
const dbURL = `mysql://${dbOptions.user}:${dbOptions.pass}@${dbOptions.host}/${dbOptions.db}`;
const  connection = mysql.createConnection(dbURL);

module.exports = connection;