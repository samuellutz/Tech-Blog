const User = require('./User');
const Post = require('./Post')

module.exports = { User };
user.hasMany(User, {
    foreignKey: 'creator',
    onDelete: 'SET NULL'
});

Post.belongsTo(User, {
    foreignKey: 'creator'
});

module.exports = { User, Post };