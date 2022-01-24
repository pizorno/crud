const express = require('express');
const ServicoController = require('./controllers/ServicoController');
const PostController = require('./controllers/PostController');
const TeamController = require('./controllers/TeamController');

const routes = express.Router();

routes.post('/servicos', ServicoController.store);
routes.post('/posts', PostController.store);
routes.post('/equipe', TeamController.store);

module.exports = routes;