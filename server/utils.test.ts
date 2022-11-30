// Copied from https://github.com/vitest-dev/vitest/blob/main/examples/basic/test/basic.test.ts
import { assert, expect, test } from "vitest";
import { returnsNumberBetweenZeroAndOne } from "./utils";

// Edit an assertion and save to see HMR in action

test("Math.sqrt()", () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test("JSON", () => {
  const input = {
    foo: "hello",
    bar: "world",
  };

  const output = JSON.stringify(input);

  expect(output).eq('{"foo":"hello","bar":"world"}');
  assert.deepEqual(JSON.parse(output), input, "matches original");
});

test("returnsNumberBetweenZeroAndOne", () => {
  expect(returnsNumberBetweenZeroAndOne()).toBeLessThanOrEqual(1);
  expect(returnsNumberBetweenZeroAndOne()).toBeGreaterThanOrEqual(0);
});
