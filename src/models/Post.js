const { Model, DataTypes } = require('sequelize');

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Post;
