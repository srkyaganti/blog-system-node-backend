const databaseFunctions = require('../database/database-functions')

databaseFunctions.migrate()
.then(response => console.log(response))
.catch(error => console.log(error))