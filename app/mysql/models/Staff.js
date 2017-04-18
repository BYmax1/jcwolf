'use strict';

module.exports = function (sequelize, DataTypes) {
  const Staff = sequelize.define('Staff', {
      email: {
        type: DataTypes.STRING,
        unique: true,
        comment: ''
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '姓名'
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '密码'
      },
      //保留三个字段
      reserve1: DataTypes.INTEGER,
      reserve2: DataTypes.STRING,
      reserve3: DataTypes.STRING(1024)
    },
    {
      classMethods: {

        associate: function (models) {
          Staff.hasMany(models.Business);
        }
      }
    });
  return Staff;
};
