"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
const pick = (obj, keys) => keys
    .map(key => ({ [key]: obj[key] }))
    .reduce((result, value) => (Object.assign(Object.assign({}, result), value)), {});
exports.pick = pick;
//# sourceMappingURL=pick.js.map