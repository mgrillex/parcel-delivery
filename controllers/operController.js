const truckService = require("../services/truckService");
const parcelService = require("../services/parcelService");
const { delay } = require("../services/timeout");

const all = async (req, res) => {
  await delay(100);
  const trucks = await truckService.trucks();
  res.render("trucks/all_trucks", {
    title: "All Trucks",
    user: req.session.user,
    trucks: trucks,
  });
};

const addParcel = async (req, res) => {
  await delay(100);
  const users = await truckService.all();
  res.render("parcels/add_parcel", {
    title: "Add parcel",
    user: req.session.user,
    users: users,
  });
};

const addParcel_post = async (req, res) => {
  const response = await parcelService.create(req.body);
  return res.render("parcels/add_parcel", {
    title: "Add Parcel",
    user: req.session.user,
    exp: response,
  });
};

const allParcel = async (req, res) => {
  await delay(100);
  const parcels = await parcelService.all();
  res.render("parcels/all_parcels", {
    title: "All Parcels",
    user: req.session.user,
    parcels: parcels,
  });
};

const view = async (req, res) => {
  await delay(100);
  console.log(req.query.id);
  const content = await truckService.view(req.query.id);
  console.log(content);
  res.render("trucks/view_truck", {
    title: "view",
    content: content,
    user: req.session.user,
    id: req.session.userid,
  });
};

const recieved = async (req, res) => {
  const response = await parcelService.update(req.query.id);
  res.render("visitor/home", {
    title: "home",
    user: req.session.user,
    id: req.session.userid,
    exp: response,
  });
};

const search = async (req, res) => {
  console.log(req.query.time);
  await delay(100);
  const result = await truckService.search(req.query.time);
  console.log("result");
  res.render("trucks/search", {
    title: "Search",
    user: req.session.user,
    trucks: result,
  });
};

module.exports = {
  search,
  all,
  view,
  addParcel,
  addParcel_post,
  allParcel,
  recieved,
};
