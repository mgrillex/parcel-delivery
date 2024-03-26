const bcrypt = require("bcrypt");
module.exports = {
  encrypt: async function encrypt(password) {
    let E = new Promise((resolve, reject) => {
      bcrypt.genSalt(10, function (err, Salt) {
        // The bcrypt is used for encrypting password.
        bcrypt.hash(password, Salt, async function (err, hash) {
          if (err) {
            reject(err);
          }
          resolve({
            message: "successfully encrypted",
            hash: hash,
          });
        });
      });
    });
    return E.then((message) => {
      return message;
    }).catch((message) => {
      throw message;
    });
  },
  // Comparing the original password to
  // encrypted password
  decryption: async function decrypt(password, e_password) {
    let D = new Promise((resolve, reject) => {
      bcrypt.compare(password, e_password, async function (err, isMatch) {
        if (err) {
          reject(err);
        }
        if (isMatch) {
          resolve({ state: true, message: "successfully decrypted" });
        } else {
          resolve({ state: false, message: "failed" });
        }
      });
    });
    return D.then((message) => {
      return message;
    }).catch((message) => {
      throw message;
    });
  },
};
