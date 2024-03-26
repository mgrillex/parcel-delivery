const { user } = require("../models/relationships");
const { parcel } = require("../models/relationships");
const truckService = require("../services/truckService");
const { data1, data2, data3 } = require("../services/mockedData");
describe("truckService test", () => {
  it("get all users ", async () => {
    const users = data1;
    user.findAll = jest.fn(async () => {
      const filter = [];
      users.forEach(select);
      function select(user) {
        if (user.email !== "admin@gmail.com") {
          filter.push(user);
        }
      }
      return filter;
    });

    const result = await truckService.all();
    expect(result.length).toEqual(users.length - 1);
    expect(user.findAll).toHaveBeenCalled();
  });

  it("user truck details ", async () => {
    const users = data2;
    user.findAll = jest.fn(async () => {
      const filter = [];
      users.forEach(select);
      function select(user) {
        if (user.email !== "admin@gmail.com") {
          filter.push(user);
        }
      }
      return filter;
    });

    const result = await truckService.trucks();
    expect(result.length).toEqual(users.length - 1);
    expect(result[0]).toHaveProperty("total", 1620);

    expect(user.findAll).toHaveBeenCalled();
  });

  it("view one user truck  content", async () => {
    const parcels = data3;
    user.findAll = jest.fn(async () => {
      const filter = [];
      parcels.forEach(select);
      function select(parcel) {
        if (parcel.status === null) {
          filter.push(parcel);
        }
      }
      return filter;
    });

    const result = await truckService.view();
    expect(result.length).toEqual(1);
    expect(user.findAll).toHaveBeenCalled();
  });

  it("search function", async () => {
    const users = data2;
    user.findAll = jest.fn(async () => {
      const filter = [];
      users.forEach(select);
      function select(user) {
        if (user.email !== "admin@gmail.com") {
          filter.push(user);
        }
      }
      return filter;
    });

    const result = await truckService.search("2022-07-13");
    expect(result.length).toEqual(users.length - 1);
    expect(result[0]).toHaveProperty("total", 1620);
    expect(user.findAll).toHaveBeenCalled();
  });
});
