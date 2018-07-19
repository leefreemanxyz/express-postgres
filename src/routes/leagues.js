const { Router } = require('express')
import LeagueController from '../controllers/league'

export const leaguesRouter = Router()
// create
leaguesRouter.post('/', async (req, res) => {
	const newLeague = req.body
	const league = await LeagueController.create(newLeague)
	return res.json(league)
})

// read
leaguesRouter.get('/:id?', async (req, res) => {
	const { id } = req.params
	if (id) {
		const league = await LeagueController.getById(id)
		return res.json(league)
	}
	const leagues = await LeagueController.getAll()
	return res.json(leagues)
})

// update
leaguesRouter.patch('/:id', async (req, res) => {
	const { id } = req.params
	const updated = await LeagueController.update(id, req.body)
	return res.json(updated)
})
// delete
leaguesRouter.delete('/:id', async (req, res) => {
	const { id } = req.params
	const deleted = await LeagueController.delete(id)
	return res.json(deleted)
})
