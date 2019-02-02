const Utils = require('./Utils');

describe('[CoreModule] Utils', () => {
  test('should return true if passed argument is object', () => {
    expect(Utils.isObject({})).toEqual(true);
  });

  test('should return false if passed argument is undefined', () => {
    expect(Utils.isObject()).toEqual(false);
  });

  test('should return false if passed argument is null', () => {
    expect(Utils.isObject(null)).toEqual(false);
  });

  test('should return false if passed argument is array', () => {
    expect(Utils.isObject([])).toEqual(false);
  });

  test('should merge two simple objects', () => {
    const a = { foo: 1 };
    const b = { bar: 1 };
    expect(Utils.mergeDeep(a, b)).toEqual({
      foo: 1,
      bar: 1,
    });
  });

  test(`should merge two deep nested objects
  if nested source has more properties`, () => {
    const a = { where: { foo: 1 } };
    const b = { include: [1, 2, 3], where: { bar: 1, baz: 1 } };
    expect(Utils.mergeDeep(a, b)).toEqual({
      include: [1, 2, 3],
      where: {
        bar: 1,
        foo: 1,
        baz: 1,
      },
    });
  });

  test(`should merge two deep nested objects
  if nested target has more properties`, () => {
    const a = { include: [1, 2, 3], where: { bar: 1, baz: 1 } };
    const b = { where: { foo: 1 }, key: true };
    expect(Utils.mergeDeep(a, b)).toEqual({
      include: [1, 2, 3],
      where: {
        bar: 1,
        foo: 1,
        baz: 1,
      },
      key: true,
    });
  });

  test(`should overwrite target properties
  with source values if in same key passed
  object and primitive`, () => {
    const a = { include: [1, 2, 3], key: { baz: 1 }, where: { bar: 1, baz: 1 } };
    const b = { where: { foo: 1 }, key: true };
    expect(Utils.mergeDeep(a, b)).toEqual({
      include: [1, 2, 3],
      where: {
        bar: 1,
        foo: 1,
        baz: 1,
      },
      key: true,
    });
  });

  test('should throw exception if target is not object', () => {
    expect(() => {
      Utils.mergeDeep(null, {});
    }).toThrow('MERGING_NOT_APPLICABLE');
  });

  test('should throw exception if source is not object', () => {
    expect(() => {
      Utils.mergeDeep({}, null);
    }).toThrow('MERGING_NOT_APPLICABLE');
  });
});
