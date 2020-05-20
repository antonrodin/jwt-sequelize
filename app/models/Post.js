'use strict';

module.exports = (sequelize, DataTypes) => {

  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {
    tableName: "posts"
  });

  Post.associate = function(models) {
    Post.belongsTo(models.User, { as: "author", foreignKey: "userId" })
  };
  return Post;
};