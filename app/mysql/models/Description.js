'use strict';

module.exports = function (sequelize, DataTypes) {
  const Description = sequelize.define('Description', {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '描述内容'
      },
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
          Description.belongsTo(models.Business);
        }
      }
    }
    );
  return Description;
};
