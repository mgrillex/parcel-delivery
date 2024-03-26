const { parcel } = require("../models/relationships");

module.exports = {
  all: async function all() {
    const parcels = await parcel.findAll({
      raw: true,
    });
    return parcels;
  },
  create: async function create(data) {
    await parcel.create(data);
    return "successfully added";
  },
  update: async function update(id) {
    await parcel.update(
      {
        status: "1",
      },
      {
        where: { id: id },
      }
    );
    return "successfully recieved";
  },
};
