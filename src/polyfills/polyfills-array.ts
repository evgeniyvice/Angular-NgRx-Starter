import 'core-js/es/array'

defineFlatMethod()

/**
 * Defines renamed 'flat' method (Stage 3 per 2018.05.22 TC39)
 * {@link https://tc39.github.io/proposal-flatMap/}
 */
function defineFlatMethod() {
  if (!('flat' in Array.prototype)) {
    Object.defineProperty(Array.prototype, 'flat', {
      value: (<any> Array.prototype).flatten
    })
  }
}
