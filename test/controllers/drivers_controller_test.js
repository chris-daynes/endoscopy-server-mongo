const assert = require('assert')
const request = require('supertest')
const Scope = require('../../models/scope')
const app = require('../../app')

describe('The Drivers controller', () => {
    it('Post to /api/scopes', (done) => {
        const newScope = {
                NHI: 'ABC1234',
                firstName: 'Sam',
                lastName: 'Smith'
            }
        request(app)
            .post('/api/scopes')
            .send(newScope)
            .end(() => {
                Scope.find({})
                    .then((scopes) => {
                        assert(scopes[0].NHI === 'ABC1234')
                        done()
                    })
            })
    })
})