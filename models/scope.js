const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScopeSchema = new Schema({
    NHI: {
        type: String,
        required: true
    },
    firstName: String,
    lastName: String
})

const Scope = mongoose.model('scope', ScopeSchema)

module.exports = Scope
