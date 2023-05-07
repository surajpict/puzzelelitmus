const routes = require('express').Router();
const controller = require('../controller/controller');


routes.route('/api/user')
    .post(controller.create_user)
    .get(controller.get_user)

module.exports = routes;