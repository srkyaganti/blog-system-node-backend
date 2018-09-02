const authModel = require('../models/auth-model')

class AuthController {
    
    login(user) {
        return new Promise((resolve, reject) => {
            authModel.authenticate(user)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }

    register() {

    }
}

module.exports = new AuthController()