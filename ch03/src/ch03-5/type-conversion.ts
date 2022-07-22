/* 타입변환
* type conversion = type casting(명시적 변환) + type coercion(암시적(컴파일러가 알아서) 변환) 
*/

let person: object = {name: "Jack", age: 33};
console.log((<{name: string}>person).name)
// console.log(person.name) // 여전히 에러 (위에서만 일시적 변환된 것)
console.log((person as {age: number}).age)

/* 타입단언 type assertion - 자바스크립트의 타입 변환 구문과 구분하기 위해 새로운 용어
* (<타입>객체)
* (객체 as 타입)
*/

interface Person{
    name : string
    age : number
}
let person2 : Person = {name :'Jack', age :33}
console.log(typeof person2.name)