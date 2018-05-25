const express = require('express')
const app = express()
const morgan = require('morgan')
const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    database: "db-container",
    username: 'postgres',
    password: "password",
    host: 'postgres',
    dialect: "postgres"
})

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    res.send('Hello World!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))