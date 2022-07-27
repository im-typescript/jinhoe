
/*
* 반환값이 없는 경우 :void -> void타입은 함수 반환 타입으로만 사용가능
* 함수 타입 => 함수 시그니처(function signature)라고 함.
* 함수 시그니처 표현: (매개변수1 타입, 매개변수2 타입, ...) => 반환값 타입
*/

// function printMe (name: string, age: number): void{
//     console.log(`name: ${name}, age: ${age}`);
// }
// printMe(3,1); // 이건 에러가 나는데

// comments.ts
let printMe: (a: string, b:number) => void = function (name, age) { 
    console.log(`name: ${name}, age: ${age}`); 
}
printMe("string",1); // 이건 에러가 안 나네? -> 매개변수에 타입만 넣으면 안 되고 이름(변수명)을 넣어줘야 한다.
// console.log(typeof printMe);
// let what = printMe(false,25); // name parameter는 string이어야할 것 같은데 number도 상관 없네?
// console.log(what)

/*
* type alias 타입 별칭
*/
type stringNumberFunc = (string, number) => void
let f: stringNumberFunc = function (a: string, b: number): void { let c = [a, b]; }
f(1,1);

/*
* undefined 주의
*/
interface INameable {
    name: string
}
function getName(o: INameable){ 
    return o != undefined ? o.name : 'unknown name' 
}

// let n = getName(undefined) // 버전이 업데이트되어서인지 책과는 다르게 undefined를 넣는 것만으로도 에러가 납니다.
// @ts-nocheck 를 이용하면 책처럼 됨 
console.log(getName({name: 'jana'}))

interface IAgeble {
    age?: number
}
function getAge(o:IAgeble){
    return o != undefined && o.age ? o.age : 0
}
// console.log(getAge(null)); 이것도 역시 책과 다르게 null을 넣기만 해도 이미 에러가 난다.



