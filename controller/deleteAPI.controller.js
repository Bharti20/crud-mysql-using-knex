const knex = require('../databaseConnection/connection')

module.exports.deleteData = (req,res) => {
    knex('demo')
    .where({id:req.body.id})
    .del().then(() => {res.send('one row deleted')})
    .catch((err) => {
        res.send(err)
    });
}