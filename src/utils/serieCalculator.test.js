import { describe, expect, test } from "vitest";
import serieCalculator from "./serieCalculator";

describe('serialCalculator function', () => {

  test('when input is 0 return an object with error and a message', () => {
    const data = serieCalculator(0);
    expect(data.error).toBe(true);
    expect(data.message).not.toHaveLength(0);
  });

  test('when input is 1 return an object with no error and value 0', () => {
    const data = serieCalculator(1);
    expect(data.error).toBe(false);
    expect(data.value).toBe(0);
  });

  test('when input is 2 return an object with error and a message', () => {
    const data = serieCalculator(2);
    expect(data.error).toBe(true);
    expect(data.message).not.toHaveLength(0);
  });

  test('when input is 3 return an object with no error and value 39', () => {
    const data = serieCalculator(3);
    expect(data.error).toBe(false);
    expect(data.value).toBe(39);
  });

  test('when input is 4 return an object with no error and value 102', () => {
    const data = serieCalculator(4);
    expect(data.error).toBe(false);
    expect(data.value).toBe(102);
  });

  test('when input is 5 return an object with no error and value 95', () => {
    const data = serieCalculator(5);
    expect(data.error).toBe(false);
    expect(data.value).toBe(95);
  });

  test('when input is 6 return an object with no error and value 115', () => {
    const data = serieCalculator(6);
    expect(data.error).toBe(false);
    expect(data.value).toBe(115);
  });

  test('when input is 7 return an object with no error and value 121.8', () => {
    const data = serieCalculator(7);
    expect(data.error).toBe(false);
    expect(data.value).toBe(121.8);
  });

  test('when input is 8 return an object with no error and value 108.5', () => {
    const data = serieCalculator(8);
    expect(data.error).toBe(false);
    expect(data.value).toBe(108.5);
  });

  test('when input is 9 return an object with no error and value 102.46153846153847', () => {
    const data = serieCalculator(9);
    expect(data.error).toBe(false);
    expect(data.value).toBe(102.46153846153847);
  });
});
