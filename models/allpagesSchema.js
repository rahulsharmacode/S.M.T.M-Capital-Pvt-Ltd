const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const PortfolioValuesData = sequelize.define('portfoliovalues', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },


      gain: DataTypes.STRING,
      gainLabel: DataTypes.STRING,
      unrelised: DataTypes.STRING,
      unrelisedLabel: DataTypes.STRING,

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
});

const PortfolioData = sequelize.define('portfolios', {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    portfolioName: DataTypes.STRING,
    gainTotal: DataTypes.STRING,
    unrelisedValue: DataTypes.STRING,
    unrelisedPer: DataTypes.STRING,

  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  },
});



module.exports = {PortfolioValuesData,PortfolioData };