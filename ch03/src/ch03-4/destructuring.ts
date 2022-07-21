import { IPerson, ICompany } from "./IPerson_ICompany";

let jack: IPerson = {name: 'Jack', age: 33}

/* 비구조화란?
* 구조화된 데이터를 분해
*/
let name1 = jack.name, age1 = jack.age
console.log(name1, age1)

/* 비구조화 할당(destructuring)
* 속성이름을 중괄호로 묶으면 정확히 그 속성명으로 변수를 선언하고
* 해당 객체의 해당 속성값을 그 변수의 초깃값으로 할당
*/
let {name, age} = jack // == "let name = jack.name, age = jack.age"
console.log(name, age)
