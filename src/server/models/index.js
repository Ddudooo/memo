var path = require('path');
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var db = {};
var sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize
    .authenticate()
    .then(()=>{
        console.log("Connection has been established successfully.");
    })
    .catch(err=>{
        console.error('Unable to connect to the database : ', err);
    });

db.User = require('./user')(sequelize, Sequelize);

module.exports = db;