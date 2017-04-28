const assert = require('assert')
const request = require('supertest')
const Scope = require('../../models/scope')
const app = require('../../app')

describe('The Scopes controller', () => {
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

    it('updates a scope document via a PUT request to /api/scopes/:id', (done) => {
        //first create a new scope, then update then retrive and assert
        const newPatient = {
            NHI: 'QWE1234',
            firstName: 'Chris',
            lastName: 'Jones'
        }
        const scope = new Scope(newPatient)
        scope.save()
            .then(() => {
                request(app)
                    .put(`/api/scopes/${scope._id}`)
                    .send({ firstName: 'Bob' })
                    .end(() => {
                        Scope.findOne({ NHI: 'QWE1234' })
                            .then((scope) => {
                                assert(scope.firstName === 'Bob')
                                done()
                            })
                    })
            })
    })
})