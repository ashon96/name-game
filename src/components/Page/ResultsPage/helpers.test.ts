import { calculateAverage, calculateSelectionPercentage } from "./helpers";

describe("calculateSelectionPercentage", () => {
  test("Verify the correct percentage is calculated out of five rounds", () => {
    const result = calculateSelectionPercentage(4);
    expect(result).toBe(80);
  });
});

describe("calculateAverage", () => {
  test("Verify the correct average is calculated out of five rounds", () => {
    const result = calculateAverage(3);
    expect(result).toBe(0.6);
  });
});
