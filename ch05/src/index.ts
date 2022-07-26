
import { arrayLength, isEmpty } from "./arrayLength";
import { range } from "./range";

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


let numbers: number[] = range(1, 9+1)
console.log(numbers)