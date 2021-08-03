const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Bharti@1mysql',
        database: 'navgurukul'
    }
});
// knex.schema.createTable('demo', function (table) {
//     table.increments('id');
//     table.string('name');
//     table.integer('age');
// })
//     .then(() => {
//         res.send('Table created')
//     })
//     .catch((err) => {
//         console.log(err)
//     });

module.exports = knex