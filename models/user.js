var Sequelize = require('sequelize');
var db = require('./db');
var modelDefinition = {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

var UserModel = db.define('user', modelDefinition);
module.exports = UserModel;
