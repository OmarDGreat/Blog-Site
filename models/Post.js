
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1, 500]
        }
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
},

{
    sequelize,
    freezetableName: true,
    underscored: true,
    modelName: 'posts',

});

module.exports = Post;