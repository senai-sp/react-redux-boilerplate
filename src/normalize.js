/* ========================================================

   This file is responsible for normalizing the browser environment before
   the application starts. To use modern language features
   even when the end user is running an older browser.
   Polyfills of:
   1) Object.assign
   2) Promise
   3) Fetch
   ====================================================== */

// 1) Object.assign
Object.assign = require('object-assign');

// 2) Promise
if (typeof Promise === 'undefined') {
    require('promise/lib/rejection-tracking').enable();
    window.Promise = require('promise/lib/es6-extensions.js')
}

// 3) Fetch
// Fetch polyfill depends on a Promise implementation, so it must come after
if (typeof window.fetch === 'undefined') {
    require('whatwg-fetch')
}
