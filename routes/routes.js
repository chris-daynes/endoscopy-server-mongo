const scopesControllers = require('../controllers/scopes_controllers')

module.exports = (app) => {
    app.get('/api', scopesControllers.greeting)

    app.post('/api/scopes', scopesControllers.create)

    app.put('/api/scopes/:id', scopesControllers.edit)
}