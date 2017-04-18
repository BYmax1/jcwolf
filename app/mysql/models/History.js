'use strict';

module.exports = function (sequelize, DataTypes) {
  const History = sequelize.define('History', {
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '业务状态',
        defaultValue:10,
      },
      //保留三个字段
      reserve1: DataTypes.INTEGER,
      reserve2: DataTypes.STRING,
      reserve3: DataTypes.STRING(1024)
    },
    {
      classMethods: {
        associate: function (models) {
          History.belongsTo(models.Business);
        }
      }
    }
    );
  return History;
};
