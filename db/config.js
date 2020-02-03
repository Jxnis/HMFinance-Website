const  mysql = require('mysql');

/* console.log(process.env.MYSQL_HOST); */

const dbOptions = {
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DB_NAME,
};
//const dbURL = `mysql://${dbOptions.user}:${dbOptions.password}@${dbOptions.host}:3306/${dbOptions.database}`;
const connection = mysql.createConnection(dbOptions);

module.exports = connection;