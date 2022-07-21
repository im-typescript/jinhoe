/* ch03-4객체의 비구조화 할당문 */

// 구조화
import { IPerson, ICompany } from "./IPerson_ICompany";

let jack: IPerson = {name: 'Jack', age: 33},
    jane: IPerson = {name: 'jane', age: 35}

let apple: ICompany = {name: 'Apple Computer, Inc', age: 43},
    ms: ICompany = {name: 'Microsoft', age: 44}

console.log(jack, jane, apple, ms);



