const  mysql = require('mysql');
let connection;
/* console.log(process.env.MYSQL_HOST); */
if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
	const dbOptions = {
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USERNAME,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DB_NAME,
	};

	connection = mysql.createConnection(dbOptions);
}
module.exports = connection;