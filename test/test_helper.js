const mongoose = require('mongoose')

before(done => {
    mongoose.connect('mongodb://localhost/endoscope_test')
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            console.warn('Warning', error)
        })
})

beforeEach(done => {
    const { scopes } = mongoose.connection.collections
    scopes.drop()
        .then(() => done())
        .catch(() => done())
}) 