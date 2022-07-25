

/* 고차함수 ch04-4 */
const add1 = (a:number, b: number):number => a+b // 보통 함수
const add3 = (a: number): (b: number) => number => (b: number):number => a+b // 고차 함수

console.log(add3(1)(3));

type NumberToNumberfunc = (a: number) => number

export const add = (a:number): NumberToNumberfunc => {
    const _add: NumberToNumberfunc = (b: number): number => {
        return a + b // 클로저
    }
    return _add
}

