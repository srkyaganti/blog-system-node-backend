const db = require('../database/setup')
const bcrypt = require('bcrypt')
const authConstants = require('../contants/auth-constants')

class AuthModel {

    authenticate(user) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT id, email, password, activated FROM users WHERE email = ?`, [user.email], 
            (error, rows, fields) => {
                if (error) 
                    reject({ success: false, error })
                else if(rows.length == 0) 
                    reject(authConstants.EMAIL_NOT_FOUND)
                else {
                    bcrypt.compare(user.password, rows[0].password, function (err, isMatch) {
                        if (err) 
                            reject({ success: false, err })
                        else if (!isMatch) 
                            reject(authConstants.PASSWORD_INCORRECT)
                        else if(!rows[0].activated) 
                            reject(authConstants.ACCOUNT_INACTIVE)
                        else 
                            resolve({ 'userId': rows[0].id, 'email': rows[0].email })
                    });
                }
            });
        })
    }
}

module.exports = new AuthModel()