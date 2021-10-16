const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Book extends Model {}

Book.init({
  title: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  pages: {
    type: DataTypes.INTEGER,
  },
  isbn: {
    type: DataTypes.STRING,
  },
  edition: {
    type: DataTypes.INTEGER,
  },
  isPaperback: {
    type: DataTypes.BOOLEAN,
  }
}, {
  sequelize,
  modelName: 'book',
  underscored: true,
  timestamps: false,
})

module.exports = Book