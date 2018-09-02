const db = require('../database/setup')
const bcrypt = require('bcrypt')
const saltRounds = 10;

class UserModel {
    
    create(user) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(user.password, saltRounds, (error, hash) => {
                if(error) {}
                user.password = hash
                
                db.query(`INSERT INTO users(email,password) VALUES(?, ?)`, 
                    [user.email, user.password], (error, rows) => {
                        if(error) reject(error)
                        resolve(rows)
                })
            })
        })
    }

    getByEmail(email) {
        return new Promise((resolve, reject) => {
            db.query(`SELECT user_id, email, password FROM users WHERE email = ?`, 
                    [email], (error, rows) => {
                        if(error) reject(error)
                        resolve(rows)
                    })
        })
    }
}

module.exports = new UserModel()