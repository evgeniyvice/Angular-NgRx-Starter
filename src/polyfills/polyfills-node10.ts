import './polyfills-object'
import './polyfills-array'

// see https://github.com/troyanskiy/ngx-resource-core/issues/18
import FormData from 'form-data'
Object.defineProperty(global, 'FormData', { value: FormData })
