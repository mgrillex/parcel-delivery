const Sequelize = require("sequelize");
const sequelize = new Sequelize("parcels_orm", "root", "root", {
  host: "127.0.0.1",
  dialect: "mysql",
  operatorsAliaases: false,
});

module.exports = {
  sequelize,
};
global.sequelize = sequelize;
