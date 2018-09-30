const { Model } = require('objection')
import League from '../league'

export default class Team extends Model {
	static get tableName() {
		return 'teams'
	}
	static get relationMappings() {
		return {
			league: {
				relation: Model.BelongsToOneRelation,
				modelClass: League,
				join: {
					from: 'teams.league_id',
					to: 'leagues.id'
				}
			}
		}
	}
}
// module.exports = { Team }
