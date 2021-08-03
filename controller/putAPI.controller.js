const knex = require('../databaseConnection/connection')

module.exports.updateData = (req,res) => {
    knex('demo')
    .where({id:req.body.id})
    .update({
        name:req.body.name,
        age:req.body.age
    }).then(() => {res.send('Record data updated')})
    .catch((err)=> {
        console.log(err)
    });

};