const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    // define columns
      //   * Doesn't allow null values.
      //   * Set as primary key.
      //   * Uses auto increment.
    id: {
      type: DataTypes.INTEGER  
    },
    categoryName: {
      type: DataTypes.STRING   //   * Doesn't allow null values.
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
