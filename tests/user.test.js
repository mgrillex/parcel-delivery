const { user } = require("../models/relationships");
const userService = require("../services/userServices");

describe("sign up test", () => {
  beforeEach(() => {
    const users = [];
    user.create = jest.fn((data) => {
      users.push(data);
    });
  });

  it("create user", async () => {
    user.findAll = jest.fn(async () => {
      return [];
    });
    expect(
      await userService.sign_up({
        email: "ahmed@gmail.com",
        id: 2222,
        password: "qq",
        username: "ahmed",
      })
    ).toEqual("successfully created you can sign in now");
    expect(user.findAll).toHaveBeenCalled();
    expect(user.create).toHaveBeenCalled();
  });

  it("existed user", async () => {
    user.findAll = jest.fn(async () => {
      return [
        {
          email: "mohamed@gmail.com",
          id: 3333,
          password: "qq",
          username: "mohamed",
        },
      ];
    });

    expect(
      await userService.sign_up({
        email: "mohamed@gmail.com",
        id: 3333,
        password: "qq",
        username: "mohamed",
      })
    ).toEqual("your truck_id or your email already exists");
    expect(user.findAll).toHaveBeenCalled();
  });
});

describe("sign in test", () => {
  it("sign in user", async () => {
    user.findAll = jest.fn(async () => {
      return [
        {
          email: "ahmed@gmail.com",
          password:
            "$2b$10$wW8J7HtNBsFcdGovSm.oMO2Ce0OZz.RcZJ1FgOKQ8LC6AxV0pvGXa",
        },
      ];
    });
    expect(
      await userService.sign_in({
        email: "ahmed@gmail.com",
        password: "qq",
      })
    ).toHaveProperty("user", "driver");
    expect(user.findAll).toHaveBeenCalled();
  });
  it("should register first", async () => {
    user.findAll = jest.fn(async () => {
      return [];
    });
    expect(
      await userService.sign_in({
        email: "ahmed@gmail.com",
        password: "qq",
      })
    ).toHaveProperty("message", "you should sign_up first");
    expect(user.findAll).toHaveBeenCalled();
  });

  it("wrong password entered", async () => {
    user.findAll = jest.fn(async () => {
      return [
        {
          email: "ahmed@gmail.com",
          password:
            "$2b$10$wW8J7HtNBsFcdGovSm.oMO2Ce0OZz.RcZJ1FgOKQ8LC6AxV0pvGXa",
        },
      ];
    });
    expect(
      await userService.sign_in({
        email: "ahmed@gmail.com",
        password: "qqqq",
      })
    ).toHaveProperty("message", "please enter the correct password");
    expect(user.findAll).toHaveBeenCalled();
  });

  it("sign in admin", async () => {
    user.findAll = jest.fn(async () => {
      return [
        {
          email: "admin@gmail.com",
          password:
            "$2b$10$wW8J7HtNBsFcdGovSm.oMO2Ce0OZz.RcZJ1FgOKQ8LC6AxV0pvGXa",
        },
      ];
    });
    expect(
      await userService.sign_in({
        email: "admin@gmail.com",
        password: "qq",
      })
    ).toHaveProperty("user", "admin");
    expect(user.findAll).toHaveBeenCalled();
  });
});
