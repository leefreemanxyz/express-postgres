const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')
const knexConnection = Knex(connection)
const { leaguesRouter } = require('./routes/leagues')
Model.knex(knexConnection)
// const sequelize = new Sequelize({
//     database: "db-container",
//     username: 'postgres',
//     password: "password",
//     host: 'postgres',
//     dialect: "postgres"
// })
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('/leagues', leaguesRouter)
// app.get('/', async (req, res) => {
// 	const leagues = await League.query()
// 	// sequelize
// 	//     .authenticate()
// 	//     .then(() => {
// 	//         console.log('Connection has been established successfully.');
// 	//     })
// 	//     .catch(err => {
// 	//         console.error('Unable to connect to the database:', err);
// 	//     });
// 	res.json(leagues)
// })

app.listen(3000, () => console.log('Example app listening on port 3000!'))
