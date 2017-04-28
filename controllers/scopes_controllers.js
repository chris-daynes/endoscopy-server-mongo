const Scope = require('../models/scope')

module.exports = {
    greeting(req, res) {
        res.send({ endo: 'scope' })
    },

    create(req, res, next) {
        const scopeProps = req.body
        Scope.create(scopeProps)
            .then(scope => res.send(scope))
            .catch(next)
    },

    edit(req, res, next) {
        const scopeId = req.params.id
        const scopeProps = req.body
        Scope.findByIdAndUpdate({ _id: scopeId}, scopeProps)
            .then(() => Scope.findById({ _id: scopeId }))
            .then(scope => res.send(scope))
            .catch(next)
    }
}