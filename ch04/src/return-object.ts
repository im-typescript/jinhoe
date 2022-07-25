export type Person = {name: string, age: number}

export const makePerson = (name: string, age: number = 10):Person =>{
    const person = {name, age}
    return person
}

export const makePersonOrigin = (name: string, age: number = 10):Person =>{
    const person = {name: name, age: age}
    return person
}

console.log(makePersonOrigin('Jack'))
console.log(makePerson('Jack', 33))


export const makePersonArrow = (name: string, age: number = 10): Person => ({name, age}) // 반환값이 객체를 의미할 때는 복합실행문과 헷갈리지 않도록 소괄호를 한번 더 감싼다
console.log(makePersonArrow('Jack3'))


const printPerson = ({name, age}: Person):void =>
    console.log(`name: ${name}, age: ${age}`)

let jack10 = {name: 'jack10', age: 100}
printPerson(jack10)


const printPersonOrigin = (a: Person):void =>
    console.log(`name: ${a.name}, age: ${a.age}`)


printPersonOrigin(jack10)