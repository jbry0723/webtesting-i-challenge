const enhancer = require("./enhancer.js");

describe("enhancer tests", () => {
  let item;
  beforeEach(() => {
    item = {
      name: "wizards hat",
      enhancement: 19,
      durability: 30,
    };
  });
  it("repair functions", () => {
    enhancer.repair(item);
    expect(item.durability).toEqual(100);
  });
  it("success returns expected values", () => {
    enhancer.success(item);
    expect(item.enhancement).toEqual(20);
    expect(item.durability).toEqual(30);
    enhancer.success(item);
    expect(item.enhancement).toEqual(20);
  });
  it("failure with enhancement>15 returns expected values", () => {
    item = {
      ...item,
      enhancement: 13,
    };

    enhancer.fail(item);
    expect(item.durability).toEqual(25);
  });
  it("failure with enhancement 15 returns expected value", () => {
    item = {
      ...item,
      enhancement: 15,
    };
    enhancer.fail(item);
    expect(item.durability).toEqual(20);
  });
  it("failure with enhancement 17+ returns expected value", () => {
    item = {
      ...item,
      enhancement: 17,
    };
    enhancer.fail(item);
    expect(item.durability).toEqual(20);
    expect(item.enhancement).toEqual(16)
  });
});
