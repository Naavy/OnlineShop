export const idx = require('../sort.js')

const TEST_ARRAY = ["chain", "backpack", "tablecloth", "bag"]

describe("Sort function test", () => {
  it('sort ascending', () => {
    expect(idx.sorting(TEST_ARRAY, 'asc')).toStrictEqual(["backpack", "bag", "chain", "tablecloth"]);
  });

  it('sort descending', () => {
    expect(idx.sorting(TEST_ARRAY, 'desc',)).toStrictEqual(["tablecloth", "chain", "bag", "backpack"]);
  });

  it('bad argument for simple sorting', () => {
    expect(idx.sorting(TEST_ARRAY, 'ascc')).toBe('Error');
  });
});