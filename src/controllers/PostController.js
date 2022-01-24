const Post = require('../models/Post');

module.exports = {
  async store(req, res) {
    const { title, author } = req.body;
    const post = await Post.create({ title, author });
    return res.json(post);
  },
};
