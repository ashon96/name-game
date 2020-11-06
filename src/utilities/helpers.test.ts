import { omitUndefinedValues } from "./helpers";

describe("omitUndefinedValues", () => {
  test("Verify function removes any keys with undefined values", () => {
    const result = omitUndefinedValues({
      keyOne: "hi",
      keyTwo: "what up",
      keyThree: undefined,
    });
    expect(result).toEqual({
      keyOne: "hi",
      keyTwo: "what up",
    });
  });
});
