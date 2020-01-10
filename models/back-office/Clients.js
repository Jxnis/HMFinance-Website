const connection = require('../../db/config');

const Clients = {};

Clients.get = (callback) => {
	connection.query(
		'SELECT * FROM client',
		(err, results, fields) => callback(err, results, fields)
	);
};

Clients.add = (clientsInfo, callback) => {
	console.log(clientsInfo);
	connection.query(
		`INSERT INTO client (name, logoURL, clientURL)
            VALUES (
                ?, ?, ?
            )
        `,
		[clientsInfo.name, clientsInfo.logoURL, clientsInfo.clientURL],
		(err, results, fields) => callback(err, results, fields)
	);
};

Clients.toggle = (clientsInfo, callback) => {
	//console.log(clientsInfo);
	const id = clientsInfo.id;
	connection.query(
		'UPDATE client SET isShowing = !isShowing WHERE id=?',
		id,
		(err, results, fields) => {
			callback(err, results, fields);
		});
};

Clients.getById = (clientID, callback) => {
	connection.query(
		`SELECT * FROM client
		WHERE id=?	
		`, clientID,
		(err, results, fields) => callback(err, results, fields)
	);
};
Clients.edit = (clientInfo, callback) => {
	console.log(clientInfo.id);
	connection.query('UPDATE client SET name=?, logoURL=?, clientURL=? WHERE id=?',
		[clientInfo.name, clientInfo.logoURL, clientInfo.clientURL, clientInfo.id],
		(err, res, fields) => callback(err, res, fields) 
	);
};

Clients.delete = (id, callback) => {
	console.log(id);
	connection.query('DELETE FROM client WHERE id=?',
		id,
		(err, res, fields) => callback(err, res, fields) 
	);
};

module.exports = Clients;