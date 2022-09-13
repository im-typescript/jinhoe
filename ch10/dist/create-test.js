"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
[
    (0, create_1.create)(Date),
    (0, create_1.create)(Point, 0, 0)
].forEach(s => console.log(s));
//# sourceMappingURL=create-test.js.map