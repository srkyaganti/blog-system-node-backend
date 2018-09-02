const databaseFunctions = require('../database/database-functions')

databaseFunctions.rollback()
.then(response => console.log(response))
.catch(error => console.log(error))