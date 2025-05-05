import { describe, expect, it, test } from "@jest/globals";
import { sum } from "..";

describe("Test for Calculator", () => {
  test("add 5 and 6", () => {
    expect(sum(5, 6)).toBe(11);
  });
  test("add  3 and 4", () => {
    expect(sum(3, 4)).toBe(5);
  });
});
describe("Test for Jhalculator", () => {
  test("add 5 and 6", () => {
    expect(sum(5, 6)).toBe(11);
  });
  test("add  3 and 4", () => {
    expect(sum(3, 4)).toBe(7);
  });
});
