
import { arrayLength, isEmpty } from "./arrayLength";
import { range } from "./range";
import { fold } from "./fold";
import { filter } from "./filter"
import { map } from "./map"

let numArray: number[] = [1,2,3]
let strArray: string[] = ['Hello', "world"]

type IPerson = {name: string, age?: number}
let personArray: IPerson[] = [{name: 'Jack'}, {name: 'Jane', age: 30}]

console.log(
    arrayLength(numArray),
    arrayLength(strArray),
    arrayLength(personArray),
    isEmpty([]),
    isEmpty([1])
)

// let numbers: number[] = range(1, 9+1)
// console.log(numbers)

let numbers: number[] = range(1, 100+1)

let result = fold(numbers, (result, value) => result*value, 1)
console.log(result)


let numbers2: number[] = range(1, 100+1)
let result2 = fold(
    map(numbers2, value => value * value),
    (result2, value) => result2 + value, 0)


console.log(result2)


const test = [3,4,5,6]
console.log(test)
function ttt(array){
    array.push(1)
}
ttt(test)

console.log(test)

