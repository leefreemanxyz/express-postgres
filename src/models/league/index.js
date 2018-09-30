const { Model } = require('objection')
import Team from '../team'

export default class League extends Model {
	static get tableName() {
		return 'leagues'
	}
	static get relationMappings() {
		return {
			teams: {
				relation: Model.HasManyRelation,
				modelClass: Team,
				join: {
					from: 'leagues.id',
					to: 'teams.league_id'
				}
			}
		}
	}
}
// module.exports = { League }
