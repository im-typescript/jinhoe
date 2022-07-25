

/* function Expression */
let add = new Function('a', 'b', 'return a+b')
let result = add(1,2)
console.log(result)


let add2 = function(a, b){return a+b}
console.log(add2(3,4))

console.log(add, add2)

/* 일등함수 first-class function
* 함수와 변수를 구분(혹은 차별)하지 않는다는 의미
*/

add2 = function(a, b){return a-b} 
console.log(add2(10,5))

// add2 = function(a, b, c){return a+b+c} 
// 함수를 저장한 변수에 다른 함수를 대입할 수도 있지만 함수시그니처 타입이 다른 것으로는 못 바꾸네

let value = (function(a, b) {return a + b;})(1,2)
console.log(value)


/* let을 이용하면 함수가 변경되어버릴 수 있으므로 const를 이용! */