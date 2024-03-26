const { user } = require("../models/relationships");
const { Op } = require("sequelize");
const { encrypt, decryption } = require("./encryptionService");

module.exports = {
  sign_up: async function sign_up(data) {
    const result = await user.findAll({
      raw: true,
      where: {
        [Op.or]: [{ email: data.email }, { id: data.id }],
      },
    });
    if (result.length === 0) {
      const test = await encrypt(data.password);
      data.password = test.hash;
      await user.create(data);
      return "successfully created you can sign in now";
    } else {
      return "your truck_id or your email already exists";
    }
  },

  sign_in: async function sign_in(data) {
    const result = await user.findAll({
      raw: true,
      where: {
        email: data.email,
      },
    });
    if (result.length === 0) {
      return { message: "you should sign_up first" };
    } else {
      const decrypt = await decryption(data.password, result[0].password);

      if (decrypt.state == true) {
        if (data.email === "admin@gmail.com") {
          return { user: "admin", id: result[0].id };
        } else {
          return { user: "driver", id: result[0].id };
        }
      } else if (decrypt.state == false) {
        return {
          message: "please enter the correct password",
        };
      }
    }
  },
};
