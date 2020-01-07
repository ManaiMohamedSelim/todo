var mysql = require('mysql');
var Sequelize = require('sequelize');
/*var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo',
    multipleStatements: true
});

mysqlConnection.connect((err)=> {
    if(!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

const port = process.env.PORT || 8080;*/

var config = module.exports;

config.db = {
    user: 'root',
    password: '',
    name: 'todo'
};

config.db.details = {
    host: 'localhost',
    port: 8080,
    dialect: 'mysql'
};

module.exports = new Sequelize(
    config.db.name,
    config.db.user,
    config.db.password,
    config.db.details
);
