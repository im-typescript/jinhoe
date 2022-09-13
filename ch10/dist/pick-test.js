"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick_1 = require("./pick");
const obj = { name: 'Jane', age: 22, city: 'Seoul', country: 'Korea' };
console.log((0, pick_1.pick)(obj, ['name', 'age']));
//# sourceMappingURL=pick-test.js.map