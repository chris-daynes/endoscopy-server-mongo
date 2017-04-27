const driversControllers = require('../controllers/drivers_controllers')

module.exports = (app) => {
    app.get('/api', driversControllers.greeting)

    app.post('/api/scopes', driversControllers.create)
}