const Servico = require('../models/Servico');

module.exports = {
  async store(req, res) {
    const { name } = req.body;
    const servico = await Servico.create({ name });
    return res.json(servico);
  }
};