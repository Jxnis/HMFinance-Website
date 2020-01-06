const connection = require('../db/config');

const User = {};

const cleanUser = (user) => ({
        ...user,
        passwordHash: 'hidden'
    })
 

User.create = (userInfo, callback) => {
    connection.query(
        `INSERT INTO user (email, passwordHash)
            VALUES (
                ?,
                SHA(?)
            )
        `,
        [userInfo.email, userInfo.password],
        (err, results, fields) => callback(err, results, fields)
    )
}

User.findByEmailAndPassword = (email, password, callback) => {
    connection.query(
        `SELECT * FROM user WHERE email = ? AND passwordHash = SHA(?)`,
        [email, password],
        (err, results, fields) => callback(err, cleanUser(results[0]), fields)
    )
 
}

User.findById = (id, callback) => {
    connection.query(
        `SELECT * FROM user WHERE id = ?`,
        [id],
        (err, results, fields) => callback(err, cleanUser(results[0]), fields)
    )
 
}

module.exports = User;
