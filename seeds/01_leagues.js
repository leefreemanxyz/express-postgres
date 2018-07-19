exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('leagues')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('leagues').insert([
				{
					id: 1,
					name: 'English Premier League',
					code: 'ENG-PREM',
					country: 'England'
				},
				{ id: 2, name: 'Spanish La Liga', code: 'ESP-LIGA', country: 'Spain' },
				{
					id: 3,
					name: 'Dutch Eredivisie',
					code: 'NED-ERED',
					country: 'Netherlands'
				}
			])
		})
}
