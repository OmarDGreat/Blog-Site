
const Sequalize = require('sequelize');
const sequelizeConnection = require('../config/connection.js');


const Comment = sequelizeConnection.define('comment', {

    id: {
        type: Sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    content: {
        type: Sequalize.TEXT,
        allowNull: false,
        validate: {
            len: [1, 500]
        }
    },

    post_id: {
        type: Sequalize.INTEGER,
        allowNull: false,
        references: {
            model: 'posts',
            key: 'id'
        }
    },

    user_id: {
        type: Sequalize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },

    day_created: {
        type: Sequalize.DATE,
        allowNull: false,
        defaultValue: Sequalize.NOW
    },
},

{
    sequalize: sequalizeConnection,
    timestamps: true,
    freezetableName: true,
    modelName: 'comments',
    underscored: true

});

module.exports = Comment;