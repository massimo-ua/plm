class Utils {
  static isObject(item) {
    return (!!item && typeof item === 'object' && !Array.isArray(item));
  }

  static mergeDeep(target, source) {
    if (Utils.isObject(target) && Utils.isObject(source)) {
      const combined = Object.assign({}, target);
      Object.keys(source).forEach((key) => {
        combined[key] = Utils.merge(target[key], source[key]);
      });
      return combined;
    }
    throw new Error('MERGING_NOT_APPLICABLE');
  }

  static merge(target, source) {
    if (Utils.isObject(target) && Utils.isObject(source)) {
      return Utils.mergeDeep(target, source);
    }
    return source;
  }
}

module.exports = Utils;
