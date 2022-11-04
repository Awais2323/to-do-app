const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,
    logging: true,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    // define: {
    //   freezeTableName: true
    // }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.task = require("./user.task.model")(sequelize, Sequelize);
db.location = require("./user.location.model")(sequelize, Sequelize);


// ASSOCIATIONS
db.user.hasMany(db.task,{
  foreignKey:"userId"
})
db.task.belongsTo(db.user,{
  foreignKey:'userId'
})
db.user.hasMany(db.location,{
  foreignKey:"userId"
})
db.location.belongsTo(db.user,{
  foreignKey:'userId'
})


module.exports = db;