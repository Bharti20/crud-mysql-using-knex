const knex = require('../databaseConnection/connection')

module.exports.showAllData = (req,res) => {
    knex.from('demo').select('*')
    .then((rows) => {
        console.log(typeof(rows))
        res.send(rows)
        console.log(rows)
    }).catch((err) => {
        console.log('err')
    });
}