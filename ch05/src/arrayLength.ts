

/* 제네릭 방식 타입 
* number[] 등의 타입을 T[] 처럼 T와 같은 일종의 변수(타입 변수)로 취급하는 것을 제네릭generics 타입이라고 한다
*/
export const arrayLength = <T>(array: T[]):number => array.length
export const isEmpty = <T>(array: T[]):boolean => arrayLength<T>(array) == 0
// <T> 는 ch03-5 타입 단언


