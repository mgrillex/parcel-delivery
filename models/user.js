module.exports = (con, sequelize) => {
  return con.define(
    "user",

    {
      id: {
        type: sequelize.DataTypes.INTEGER(5),
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: sequelize.DataTypes.STRING(35),
        allowNull: false,
      },
      email: {
        type: sequelize.DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      weight: sequelize.DataTypes.INTEGER(100),
      password: {
        type: sequelize.DataTypes.STRING(300),
        allowNull: false,
      },
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
