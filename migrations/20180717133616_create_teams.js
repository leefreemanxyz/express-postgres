exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('teams', (table) => {
			table.increments('id').primary()
			table.string('name')
			table
				.integer('league_id')
				.references('id')
				.inTable('leagues')
				.onDelete('CASCADE')
		})
	])
}

exports.down = function(knex, Promise) {
	return Promise.all([knex.schema.dropTable('teams')])
}
