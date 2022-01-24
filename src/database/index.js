const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Servico = require('../models/Servico');

const connection = new Sequelize(dbConfig);
Servico.init(connection)

module.exports = connection;