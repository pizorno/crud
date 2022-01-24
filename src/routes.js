const express = require('express');
const ServicoController = require('./controllers/ServicoController');
const PostController = require('./controllers/PostController');
const TeamController = require('./controllers/TeamController');

const routes = express.Router();

routes.post('/servicos', ServicoController.store);
routes.post('/post', PostController.store);
routes.post('/team', TeamController.store);

module.exports = routes;