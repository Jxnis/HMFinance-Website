const connection = require('../../db/config');

const User = {};

const cleanUser = (user) => ({
	...user,
	passwordHash: 'hidden'
});
 
//All users
User.get = (callback) => {
	connection.query(
		'SELECT * FROM user WHERE IS_SA = 0',
		(err, results, fields) => callback(err, cleanUser(results), fields)
	);
 
};
//Delete user by id
User.delete = (params, callback) => {
	const id = params.id;
	console.log(id);
	connection.query('DELETE FROM user WHERE id = ?',
		[id],
		(err, res, fields) => callback(err, res, fields) 
	);
};


//SignUp
User.create = (userInfo, callback) => {
	connection.query(
		`INSERT INTO user (email, passwordHash)
            VALUES (
                ?,
                SHA2(?, 256)
            )
        `,
		[userInfo.email, userInfo.password],
		(err, results, fields) => callback(err, results, fields)
	);
};

User.findByEmailAndPassword = (email, password, callback) => {
	connection.query(
		'SELECT * FROM user WHERE email = ? AND passwordHash = SHA2(?, 256)',
		[email, password],
		(err, results, fields) => callback(err, cleanUser(results[0]), fields)
	);
 
};

User.findById = (id, callback) => {
	//console.log(id);
	connection.query(
		'SELECT * FROM user WHERE id = ?',
		[id],
		(err, results, fields) => callback(err, cleanUser(results[0]), fields)
	);
 
};

module.exports = User;
