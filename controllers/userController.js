const userServices = require("../services/userServices");
const { delay } = require("../services/timeout");

const sign_up = async (req, res) => {
  const response = await userServices.sign_up(req.body);
  console.log(response);
  return res.render("visitor/sign_up", {
    title: "sign_up",
    exp: response,
  });
};
const sign_in = async (req, res) => {
  const response = await userServices.sign_in(req.body);

  await delay(100);
  console.log(response);
  console.log(response.user);
  console.log(response.id);
  if (response.user == "admin") {
    req.session.user = response.user;
    req.session.userid = response.id;
    return res.redirect("/");
  } else if (response.user == "driver") {
    req.session.user = response.user;
    req.session.userid = response.id;
    return res.redirect("/");
  } else {
    return res.render("visitor/sign_in", {
      title: "sign_in",
      exp: response.message,
    });
  }
};

const sign_out = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};
module.exports = {
  sign_up,
  sign_in,
  sign_out,
};
