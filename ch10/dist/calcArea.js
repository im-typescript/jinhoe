"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcArea = void 0;
const calcArea = (shape) => {
    switch (shape.tag) {
        case 'square': return shape.size * shape.size;
        case 'rectangle': return shape.width * shape.height;
        case 'circle': return shape.radius * shape.radius;
    }
    return 0;
};
exports.calcArea = calcArea;
//# sourceMappingURL=calcArea.js.map