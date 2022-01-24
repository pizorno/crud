const express = require('express');
const ServicoController = require('./controllers/ServicoController');

const routes = express.Router();

routes.post('/servicos', ServicoController.store);

module.exports = routes;