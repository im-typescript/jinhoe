"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flyOrSwim = void 0;
const BirdAndFish_1 = require("./BirdAndFish");
const flyOrSwim = (o) => {
    console.log(o);
    if (o instanceof BirdAndFish_1.Bird) {
        console.log(o);
        o.fly();
    }
    else if (o instanceof BirdAndFish_1.Fish) {
        o.swim();
    }
};
exports.flyOrSwim = flyOrSwim;
//# sourceMappingURL=flyOrSwim.js.map