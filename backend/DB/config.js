const query = require("mysql2");

// const connection = query.createConnection({
//     host:"mysql-102257-0.cloudclusters.net",
//     database:"CarRentalDB",
//     user:"ahmad",
//     password:"ahmad169",
//     port:18967
// })

// const connection = query.createConnection({
//     host:"localhost",
//     database:"carrental",
//     user:"root",
//     password:""
// })
const connection = query.createConnection({
    host:"sql7.freesqldatabase.com",
    database:"sql7615175",
    user:"sql7615175",
    password:"NZJZWxa3fm",
    port:"3306"
})


module.exports = connection