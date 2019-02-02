class Utils {
  static isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
  }

  static mergeDeep(target = {}, source = {}) {
    const combined = {};
    if (Utils.isObject(target) && Utils.isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (Utils.isObject(source[key])) {
          Object.assign(
            combined,
            (Object.prototype.hasOwnProperty.call(target, key)
              ? { [key]: Utils.mergeDeep(target[key], source[key]) }
              : (target, { [key]: {} })
            ),
          );
        }
        Object.assign(combined, target, { [key]: source[key] });
      });
    } else {
      throw new Error('MERGING_NOT_APPLICABLE');
    }
    return combined;
  }
}

module.exports = Utils;
