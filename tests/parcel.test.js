const { parcel } = require("../models/relationships");
const parcelService = require("../services/parcelService");

describe("parcelService test", () => {
  it("get all parcels ", async () => {
    parcel.findAll = jest.fn(async () => {
      return [
        { id: 1, details: "sdfdff", weight: 11, status: "" },
        { id: 2, details: "sdfddfsfff", weight: 21, status: "" },
      ];
    });

    const parcels = await parcelService.all();
    expect(parcels[0].id).toEqual(1);
    expect(parcel.findAll).toHaveBeenCalled();
  });

  it("create parcels", async () => {
    const parcels = [];
    parcel.create = jest.fn(async (data) => {
      parcels.push(data);
    });
    expect(
      await parcelService.create({
        id: 1,
        details: "sdfdff",
        weight: 11,
        status: "",
      })
    ).toEqual("successfully added");
    expect(parcel.create).toHaveBeenCalled();
  });

  it("update status", async () => {
    const parcels = [
      { id: 1, details: "sdfdff", weight: 11, status: "" },
      { id: 2, details: "sdfddfsfff", weight: 21, status: "" },
    ];

    parcel.update = jest.fn(async () => {
      parcels.forEach(update);
      function update(parcel) {
        if (parcel.id == 1) {
          parcel.status = 1;
        }
      }
    });

    expect(await parcelService.update(1)).toEqual("successfully recieved");
    expect(parcels[0].status).toEqual(1);
    expect(parcels[1].status).toEqual("");
    expect(parcel.update).toHaveBeenCalled();
  });
});
