
/* ... -> 비구조화할당문에서 잔여rest 연산자 
* 비구조화할당문이 아닌 경우 전개spread 연산자 
*/

let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam',
    address2: 'Sinsa-dong'
}
// 잔여rest 연산자
const {country, city, ...detail} = address
console.log(country)
console.log(typeof city)
console.log(detail)
console.log(typeof detail)


// 전개spread 연산자
let anyObject: object = {property1: 'what', property2: 'is', property3: 'this'}
let merged = {...address, ...anyObject, pro4: 'real'}
// ...객체명 -> 해당 객체의 속성을 다 꺼내와서 새로운 객체의 속성으로 부여할 수 있음 
console.log (merged)

