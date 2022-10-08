
const Sequalize = require('sequelize');
const sequelizeConnection = require('../config/connection.js');
const bycrypt = require('bcrypt');

const User = sequelizeConnection.define('user', {

    id: {
        type: Sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    username: {
        type: Sequalize.STRING,
        allowNull: false,
        validate: {
            len: [3, 26]
        }
    },

    password: {
        type: Sequalize.STRING,
        allowNull: false,
        validate: {
            len: [5, 50]
        }
    },

},

{
    sequalize: sequalizeConnection,
    timestamps: false,
    freezetableName: true,
    modelName: 'user',
    underscored: true

});

User.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, 10);
})

module.exports = User;