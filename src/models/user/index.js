import bcrypt from 'bcryptjs'
const { Model } = require('objection')

export default class User extends Model {
    static get tableName() {
        return 'users'
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                displayName: { type: 'string' },
                email: { type: 'string' },
                passwordHash: { type: 'string' },
            }
        }
    }
    async password(password) {
        this.passwordHash = await bcrypt.hash(password, 10)
    }
    verifyPassword(password, callback) {
        bcrypt.compare(password, this.hash, callback)
    }
    static get relationMappings() {
        return {

        }
    }
}
