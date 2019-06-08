
import 'url-polyfill'

defineToJSONMethod()

/**
 * Defines 'toJSON' method for URL instances
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/URL/toJSON}
 */
function defineToJSONMethod() {
  if (!('toJSON' in URL.prototype)) {
    Object.defineProperty(URL.prototype, 'toJSON', {
      value(this: URL) {
        return this.href
      },
    })
  }
}
