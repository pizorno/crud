const { Model, DataTypes } = require('sequelize');

class Servico extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Servico;