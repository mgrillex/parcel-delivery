module.exports = (con, sequelize) => {
  return con.define(
    "parcel",

    {
      id: {
        type: sequelize.DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      details: sequelize.DataTypes.STRING(300),
      weight: sequelize.DataTypes.INTEGER(50),
      status: sequelize.DataTypes.INTEGER(2),
      createdAt: {
        type: sequelize.DATEONLY,
        allowNull: false,
      },
      updatedAt: {
        type: sequelize.DATEONLY,
        allowNull: false,
      },
    }
  );
};
