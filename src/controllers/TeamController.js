const Team = require('../models/Team');

module.exports = {
  async store(req, res) {
    const { name } = req.body;
    const team = await Team.create({ name });
    return res.json(team);
  },
};
