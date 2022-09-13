"use strict";
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, "a"));
let y = "a";
console.log(getProperty(y, 1));
//# sourceMappingURL=getProperty.js.map