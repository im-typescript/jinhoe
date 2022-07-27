
import {gggenerator} from './generator'
import { rangeGenerator } from './rangeGenerator'
import { createRangeIterable } from './createRangeIterable'
import { StringIterable } from './StringIterable'
import { gen12345 } from './yield-star'

// for(let value of gggenerator())
//     console.log(value)


let iterator = rangeGenerator(1, 3+1)
while(1){
    const {value, done} = iterator.next()
    if(done) break
    console.log(value)
}

for(let val of gen12345()){
    console.log(val)
}


// for(let value of rangeGenerator(4, 7+1))
//     console.log(value)


// const fixed = (cb: (a:number, number?) => number) : void => {}


// // 제네릭 타입 - 타입변수
// function someTexts<T>(texts: T) : T{
//     return texts;
// }
// someTexts(3)


// const iterator2 = createRangeIterable(1, 3+1)
// while(true){
//     const {value, done} = iterator2.next()
//     if(done) break
//     console.log(value)
// }


// for(let value of new StringIterable(['hello', 'world','!']))
//     console.log(value)