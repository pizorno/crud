const { Model, DataTypes } = require('sequelize');

class Team extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Team;
