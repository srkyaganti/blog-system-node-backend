const authModel = require('../models/auth-model')
const jwt = require('jsonwebtoken')
const app_key = require('../config.json').app_key
const emailService = require('../email/setup')

class AuthController {
    
    login(data) {
        return new Promise((resolve, reject) => {
            authModel.authenticate(data)
            .then(data => {
                jwt.sign(data, app_key, { expiresIn: 7*24*60*60 }, 
                    (error, response) => {
                        if(error) reject(error)
                        else resolve(response)
                    })
            })
            .catch(error => reject(error))
        })
    }

    register() {

    }

    forgotPassword(data) {
        return new Promise((resolve, reject) => {
            emailService.send({email: data.email, subject: 'Password reset', html: ""})
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }

    resetPassword(data) {
        return new Promise((resolve, reject) => {
            // update password after validation.
        })
    }

    authorize(data) {
        return new Promise((resolve, reject) => {
            jwt.verify(data.split(' ')[1], app_key, (error, data) => {
                if(error) reject({success: false, message: error})
                else resolve({success: true, data})
            })
        })
    }
}

module.exports = new AuthController()