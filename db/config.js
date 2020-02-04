const  mysql = require('mysql');

const connection = mysql.createConnection(process.env.JAWSDB_URL);

/* const dbOptions = {
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DB_NAME,
};

const connection = mysql.createConnection(dbOptions);
 */
module.exports = connection;