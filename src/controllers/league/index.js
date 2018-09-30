import League from '../../models/league'

export default class LeagueController {
	static getAll = async () => {
		const leagues = await League.query().eager('teams')
		return leagues
	}
	static getById = async (id) => {
		const league = await League.query()
			.findById(id)
			.eager('teams')
		return league
	}
	static create = async (data) => {
		const league = await League.query().insert(data)
		return league
	}
	static delete = async (id) => {
		const deleted = await League.query()
			.delete()
			.where({ id: id })
			.returning('*')
		return deleted
	}
	static update = async (id, data) => {
		const updated = await League.query().patchAndFetchById(id, data)
		return updated
	}
}
