"use strict";
/*
* 반환값이 없는 경우 :void -> void타입은 함수 반환 타입으로만 사용가능
* 함수 타입 => 함수 시그니처(function signature)라고 함.
* 함수 시그니처 표현: (매개변수1 타입, 매개변수2 타입, ...) => 반환값 타입
*/
// comments.ts
let printMe = function (name, age) { return name; };
console.log(typeof printMe);
let what = printMe(false, 25); // name parameter는 string이어야할 것 같은데 number도 상관 없네?
console.log(what);
let f = function (a, b) { let c = [a, b]; };
f(1, 1);
//# sourceMappingURL=index.js.map