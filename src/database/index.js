const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Servico = require('../models/Servico');
const Post = require('../models/Post');
const Team = require('../models/Team');

const connection = new Sequelize(dbConfig);
Servico.init(connection);
Post.init(connection);
Team.init(connection);

module.exports = connection;