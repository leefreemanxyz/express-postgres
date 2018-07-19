exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('teams')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('teams').insert([
				{ name: 'Chelsea', league_id: 1 },
				{ name: 'Fulham', league_id: 1 },
				{ name: 'Newcastle United', league_id: 1 },
				{ name: 'Barcelona', league_id: 2 },
				{ name: 'Real Madrid', league_id: 2 },
				{ name: 'Seville', league_id: 2 },
				{ name: 'Ajax', league_id: 3 },
				{ name: 'PSV', league_id: 3 },
				{ name: 'Vitesse Arnhem', league_id: 3 }
				// { name: 'Celtic', leagues_id: 6 },
				// { name: 'Hearts', leagues_id: 6 },
				// { name: 'Hibernian', leagues_id: 6 }
			])
		})
}
