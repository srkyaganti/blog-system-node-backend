const userModel = require('../models/user-model')

class UserController {
    
    create(user) {
        return new Promise((resolve, reject) => {
            userModel.create(user)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }
}

module.exports = new UserController()