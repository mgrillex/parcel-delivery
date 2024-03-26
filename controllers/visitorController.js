const home = async (req, res) => {
  if (req.session.user == "admin") {
    return res.render("visitor/home", {
      title: "home",
      user: req.session.user,
    });
  } else if (req.session.user == "driver") {
    return res.render("visitor/home", {
      title: "home",
      user: req.session.user,
      id: req.session.userid,
    });
  } else {
    console.log(req);

    return res.render("visitor/home", {
      title: "home",
    });
  }
};

const sign_up = async (req, res) => {
  return res.render("visitor/sign_up", {
    title: "sign_up",
  });
};
const sign_in = async (req, res) => {
  return res.render("visitor/sign_in", {
    title: "sign_in",
  });
};

module.exports = {
  home,
  sign_up,
  sign_in,
};
