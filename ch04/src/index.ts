import {init} from './init/init'
import {add} from './high-order'

/* ch04-3 */
const isGreater = (a:number, b:number):boolean => a > b

console.log(isGreater(5,4))

/* ch04-4 일등함수 살펴보기 */

/* 콜백함수 */
const fn = (callback: ()=>void) => callback();

init(()=>console.log('custom initialization finished.'))


console.log(add(5)(6))