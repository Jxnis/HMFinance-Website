const  mysql = require('mysql');
const keys = require('../keys');

const dbOptions = {
	host: 'localhost',
	user: keys.MYSQL_USERNAME,
	password: keys.MYSQL_PASSWORD,
	database: keys.MYSQL_DB_NAME,
};
//const dbURL = `mysql://${dbOptions.user}:${dbOptions.password}@${dbOptions.host}/${dbOptions.database}`;
const  connection = mysql.createConnection(dbOptions);

module.exports = connection;