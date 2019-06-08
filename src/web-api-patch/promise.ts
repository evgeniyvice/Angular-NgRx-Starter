/**
 * @description Makes BlueBird promise global.
 * See https://github.com/angular/zone.js/blob/master/NON-STANDARD-APIS.md#currently-supported-non-standard-common-apis
 * and https://github.com/angular/zone.js/issues/455#issuecomment-285749589
 */
import Bluebird from 'bluebird'

// tslint:disable:no-unbound-method
const oldThen = Bluebird.prototype.then

Bluebird.prototype.then = function(onFulfilled: unknown, onRejected: unknown) {
  // @ts-ignore
  const zone = Zone.current

  return oldThen.call(this, (resolvedValue: unknown) => {
    if (typeof onFulfilled === 'function') {
      /**
       * see https://github.com/angular/zone.js/blob/6ba3169876a1be02410385651a9d23667eef0e93/lib/extra/bluebird.ts#L28
       */
      return new Bluebird((resolve, reject) => {
        zone.scheduleMicroTask('Promise.then', () => {
          try {
            resolve(onFulfilled(resolvedValue))
          } catch (error) {
            reject(error)
          }
        })
      })
    }
    return resolvedValue
  }, onRejected)
}

// TODO svr93: maybe `Zone.__symbol__('ZoneAwarePromise')` is better
// @ts-ignore
__zone_symbol__ZoneAwarePromise = Bluebird
// @ts-ignore
Zone.assertZonePatched = function() {}

Promise.config({ cancellation: true, longStackTraces: false })
