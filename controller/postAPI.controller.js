const knex = require('../databaseConnection/connection')

module.exports.dataCreate = (req, res) => {
    let data =
    {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    }
    knex('demo').insert(data).then(() => { res.send(data) })
        .catch(() => {
            console.log('err')
        });
};
// module.exports = dataCreate


