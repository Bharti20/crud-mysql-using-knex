const express = require('express')
const app = express()
app.use(express.json());

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Bharti@1mysql',
        database: 'navgurukul'
    }
});

app.get('/showData', function(req,res){
    knex.from('demo').select('*')
    .then((rows) => {
        res.send(rows)
        console.log(rows)
    }).catch((err) => {
        console.log('err')
    });
})

app.get('/', (req, res) => {
    knex.schema.createTable('demo', function (table) {
        table.increments();
        table.string('name');
        table.integer('age');
    })
        .then(() => {
            res.send('Table created')
        })
        .catch((err) => {
            console.log(err)
        });
});
app.post('/insertData', (req, res) => {
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
});

app.put('/updateData',(req,res) => {
    knex('demo')
    .where({id:req.body.id})
    .update({
        name:req.body.name,
        age:req.body.age
    }).then(() => {res.send('Record data updated')})
    .catch((err)=> {
        console.log(err)
    });   
});

app.delete('/deleteRow', (req,res) => {
    knex('demo')
    .where({id:req.body.id})
    .del().then(() => {res.send('one row deleted')})
    .catch((err) => {
        res.send(err)
    });
});

app.listen(3000, function () {
    console.log('server running--')
});


