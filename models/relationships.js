const user_model = require("./user");
const parcel_model = require("./parcel");

const con = require("../src/connection");
const Sequelize = require("sequelize");

const user = user_model(con.sequelize, Sequelize);
const parcel = parcel_model(con.sequelize, Sequelize);

//user and  parcel===> one to many
user.hasMany(parcel);
parcel.belongsTo(user);

con.sequelize.sync({ force: false });

module.exports = {
  user,
  parcel,
};
