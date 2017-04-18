'use strict';

module.exports = function (sequelize, DataTypes) {
  const Business = sequelize.define('Business', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '业务名称'
      },
      company: {
        type: DataTypes.STRING,
        comment: '公司名称'
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:10,
        comment: '业务状态'
      },
      weight:{
        type: DataTypes.INTEGER,
        comment: '权重'
      },
      amount:{
        type: DataTypes.FLOAT,
        comment: '估算签约金额'
      },
      last:{
        type: DataTypes.INTEGER,
        comment: '估算业务时间，以天为单位'
      },
      //保留三个字段
      reserve1: DataTypes.INTEGER,
      reserve2: DataTypes.STRING,
      reserve3: DataTypes.STRING(1024)
    },
    {
      classMethods: {

        associate: function (models) {
          Business.belongsTo(models.Staff);
          Business.hasMany(models.Description);
          Business.hasMany(models.History);
        }

      }
    });
  return Business;
};
