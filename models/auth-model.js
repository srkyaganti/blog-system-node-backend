const db = require('../database/setup')
const bcrypt = require('bcrypt')

class AuthModel {

    authenticate(user) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT id, email, password FROM users WHERE email = ?`, [user.email], 
            (error, rows, fields) => {
                if (error) reject(error)
                else {
                    bcrypt.compare(user.password, rows[0].password, function (err, isMatch) {
                        if (err) reject(error)
                        else if (isMatch) resolve(rows)
                        else reject({"success":false,"message":"password doesnot match"})
                    });
                }
            });
        })
    }
}

module.exports = new AuthModel()