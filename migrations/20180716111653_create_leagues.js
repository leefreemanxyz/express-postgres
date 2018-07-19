exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('leagues', (table) => {
			table.increments('id').primary()
			table.string('name')
			table.string('code')
			table.string('country')
		})
	])
}

exports.down = function(knex, Promise) {
	return Promise.all([knex.schema.dropTable('leagues')])
}
