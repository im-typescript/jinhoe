
import {gggenerator} from './generator'
import { rangeGenerator } from './rangeGenerator'

for(let value of gggenerator())
    console.log(value)


let iterator = rangeGenerator(1, 3+1)
while(1){
    const {value, done} = iterator.next()
    if(done) break
    console.log(value)
}



for(let value of rangeGenerator(4, 7+1))
    console.log(value)


const fixed = (cb: (a:number, number?) => number) : void => {}