const Scope = require('../models/driver')

module.exports = {
    greeting(req, res) {
        res.send({ endo: 'scope' })
    },

    create(req, res, next) {
        const scopeProps = req.body
        Scope.create(scopeProps)
            .then(scope => res.send(scope))
            .catch(next)
    }
}