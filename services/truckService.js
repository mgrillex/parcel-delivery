const { user } = require("../models/relationships");
const { parcel } = require("../models/relationships");
const { Op } = require("sequelize");
const sequelize = require("sequelize");

module.exports = {
  all: async function all() {
    const users = await user.findAll({
      raw: true,
      where: {
        email: {
          [Op.ne]: "admin@gmail.com",
        },
      },
    });
    return users;
  },
  trucks: async function trucks() {
    const trucks = await user.findAll({
      raw: true,
      include: [parcel],
      attributes: [
        "id",
        "username",
        "email",
        "weight",
        [sequelize.fn("COUNT", sequelize.col("parcels.id")), "count"],
        [
          sequelize.fn("sum", sequelize.col("parcels.weight")),
          "parcels_weight",
        ],
      ],
      where: {
        [Op.and]: [
          {
            email: {
              [Op.ne]: "admin@gmail.com",
            },
          },
          { "$parcels.status$": null },
        ],
      },
      group: "id",
    });
    trucks.forEach(total);

    function total(item) {
      item.total = Number(item.weight) + Number(item.parcels_weight);
    }

    return trucks;
  },
  view: async function view(id) {
    const view = await user.findAll({
      raw: true,
      include: [parcel],
      attributes: ["parcels.weight", "parcels.details", "parcels.id"],
      where: {
        [Op.and]: [
          {
            id: id,
          },
          { "$parcels.status$": null },
        ],
      },
    });
    return view;
  },
  search: async function search(time) {
    const result = await user.findAll({
      raw: true,
      include: [parcel],
      attributes: [
        "id",
        "username",
        "email",
        "weight",
        [sequelize.fn("COUNT", sequelize.col("parcels.id")), "count"],
        [
          sequelize.fn("sum", sequelize.col("parcels.weight")),
          "parcels_weight",
        ],
      ],
      where: {
        [Op.and]: [
          {
            email: {
              [Op.ne]: "admin@gmail.com",
            },
          },
          { "$parcels.status$": null },
          { "$parcels.createdAt$": time },
        ],
      },
      group: "id",
    });
    result.forEach(total);

    function total(item) {
      item.total = Number(item.weight) + Number(item.parcels_weight);
    }
    console.log(result);
    return result;
  },
};
