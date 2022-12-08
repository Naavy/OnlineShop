export const idx = require('../sort.js')

const TEST_ARRAY = ["chain", "backpack", "tablecloth", "bag"]
const TEST_ARRAY_2 = [
  { id: 1, title: "T-Shirt", price: 22.3 },
  { id: 2, title: "Backpack", price: 109.95 },
  { id: 3, title: "Jacket", price: 55.99 },
  { id: 4, title: "SanDisk SSD", price: 109 },
  { id: 5, title: "Bracelet", price: 695 },
]

describe("Sort function test", () => {
  it('simple sort ascending', () => {
    expect(idx.simpleSorting(TEST_ARRAY, 'asc')).toStrictEqual(["backpack", "bag", "chain", "tablecloth"]);
  });

  it('simple sort descending', () => {
    expect(idx.simpleSorting(TEST_ARRAY, 'desc',)).toStrictEqual(["tablecloth", "chain", "bag", "backpack"]);
  });

  it('bad argument for simple sorting', () => {
    expect(idx.simpleSorting(TEST_ARRAY, 'ascc')).toBe('Error');
  });

  it('sort object ascending', () => {
    expect(idx.objectSorting(TEST_ARRAY_2, 'asc')[0].title).toEqual("Backpack");
    expect(idx.objectSorting(TEST_ARRAY_2, 'asc')[TEST_ARRAY_2.length - 1].title).toEqual("T-Shirt");
  });

  it('sort object descending', () => {
    expect(idx.objectSorting(TEST_ARRAY_2, 'desc')[0].title).toEqual("T-Shirt");
    expect(idx.objectSorting(TEST_ARRAY_2, 'desc')[TEST_ARRAY_2.length - 1].title).toEqual("Backpack");
  });

  it('bad argument for object sorting', () => {
    expect(idx.objectSorting(TEST_ARRAY_2, 'descc')).toBe('Error');
  });
});