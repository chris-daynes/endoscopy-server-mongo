const assert = require('assert')
const request = require('supertest')
const app = require('../app')

describe('The express app', () => {
    it('correctly handles a GET request to /api', (done) => {
        request(app)
            .get('/api')
            .end((err, res) => {
                assert(res.body.endo === 'scope')
                done()
            })
    })
})