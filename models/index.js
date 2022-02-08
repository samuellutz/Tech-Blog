const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
//One to many relationship between posts and users
User.hasMany(Post, {
    foreignKey: 'creator',
    onDelete: 'SET NULL',
    constraints: false
});

Post.belongsTo(User, {
    foreignKey: 'creator'
});

module.exports = { User, Post, Comment};