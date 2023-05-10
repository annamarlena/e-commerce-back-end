// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const { toDefaultValue } = require('sequelize/types/lib/utils');

class Product extends Model {}

Product.init(
  {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,  
    autoIncrement: true
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: { isDecimal: true }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    toDefaultValue: 10,
    validate: { isNumeric: true }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
    model: "category",
    key: "id"
    }
  }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
