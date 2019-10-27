import { toObject } from "../src/toObject";

describe("toObjet function", () => {
  it("should return hello", () => {
    expect(toObject("localisation:Paris AND localisation:Nice")).toEqual([]);
  });
});
