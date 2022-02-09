const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull:false,

        },
        creator: {
            type:DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'user',
                key: 'id'
            },
        },
        originalPost: {
            type:DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'post',
                key: 'id'
            },
        }
    },
    {
        sequelize,
        timestamps:true,
        freezeTableName:true,
        underscored:true,
        modelName: 'post'
    }
)

module.exports = Comment; 