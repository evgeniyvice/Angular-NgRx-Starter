import 'core-js/es/object'

defineFromEntriesMethod()

declare global {
  interface ObjectConstructor {
    fromEntries<T>(iter: Array<[string, T]> | IterableIterator<[string, T]>): Record<string, T>,
    fromEntries(iter: Array<[string, any]> | IterableIterator<[string, any]>): Record<string, any>,
  }
}

/**
 * Defines 'Object.fromEntries' method (Stage 3 per 2018.07.24 TC39)
 * {@link https://github.com/tc39/proposal-object-from-entries/}
 */
function defineFromEntriesMethod() {
  if (!('fromEntries' in Object)) {
    Reflect.defineProperty(Object, 'fromEntries', {
      value: ObjectFromEntries,
    })
  }

  /**
   * {@link https://github.com/tc39/proposal-object-from-entries/blob/master/polyfill.js}
   */
  function ObjectFromEntries(iter: any): ReturnType<ObjectConstructor['fromEntries']> {
    const obj = {}

    for (const pair of iter) {
      if (Object(pair) !== pair) {
        throw new TypeError('iterable for fromEntries should yield objects')
      }

      // Consistency with Map: contract is that entry has "0" and "1" keys, not
      // that it is an array or iterable.

      const { '0': key, '1': val } = pair

      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: val,
      })
    }

    return obj
  }
}
