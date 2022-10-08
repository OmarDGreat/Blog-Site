
const Sequalize = require('sequelize');
const sequelizeConnection = require('../config/connection.js');


const Post = sequelizeConnection.define('post', {

    id: {
        type: Sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    title: {
        type: Sequalize.STRING,
        allowNull: false,
        validate: {
            len: [1, 100]
        }
    },

    content: {
        type: Sequalize.TEXT,
        allowNull: false,
        validate: {
            len: [1, 500]
        }
    },

    user_id: {
        type: Sequalize.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
},

{
    sequalize: sequalizeConnection,
    timestamps: true,
    freezetableName: true,
    modelName: 'posts',
    underscored: true

});

module.exports = Post;