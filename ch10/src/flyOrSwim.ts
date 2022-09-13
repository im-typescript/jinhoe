import { Bird, Fish } from "./BirdAndFish";

export const flyOrSwim = (o: Bird | Fish): void => {
    console.log(o);
    if(o instanceof Bird){
        console.log(o);
        o.fly();
    } else if(o instanceof Fish){
        o.swim();
    }
}