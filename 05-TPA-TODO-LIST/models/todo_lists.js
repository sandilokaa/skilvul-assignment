'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo_lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      todo_lists.belongsTo(models.users, {
        foreignKey: "user_id"
      });

    }
  }
  todo_lists.init({
    user_id: DataTypes.INTEGER,
    activity: DataTypes.TEXT,
    description: DataTypes.TEXT,
    activityDate: DataTypes.DATEONLY,
    activityTime: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'todo_lists',
  });
  return todo_lists;
};