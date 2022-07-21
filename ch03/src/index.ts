/*
* 여러 줄로 구현할 때 이용할 수 있는 구분자 3가지 - 쉼표(,), 세미콜론(;), 단순줄바꿈
* :object 라는 타입제한은 object이기만 하면 아무 object나 올 수 있으므로
* 특정 속성을 가진 object로 제한하기 위해 Interface 존재
*/
interface IPerson {
    name: string // 필수속성
    age: number // 필수속성
}

interface IPerson2 {
    name: string // 필수속성
    age: number // 필수속성
    etc?: boolean // 선택속성
}
let good1: IPerson2 = {name: 'Jack', age: 32}
let good2: IPerson2 = {name: 'Jack', age: 32, etc: true}


/* 익명 인터페이스 
* 인터페이스 이름을 정의해서 그 이름을 쓰는 대신, 타입지정하는 곳에다 그냥 바로 인터페이스 정의
*/
let ai: {
    name: string
    age: number
    etc?: boolean
} = {name: 'Jack', age: 32}


function printMe(me: {name: string, age: number, etc?: boolean}){
    console.log(
        me.etc ?
            `${me.name} ${me.age} ${me.etc}` :
            `${me.name} ${me.age}`
    )
}

printMe(ai)


/* ch03-3 클래스 선언 
* 접근제한자(public, private, protect) 생략시 public으로 간주
*/
class Person1 {
    name!: string
    age?: number
}
// 위 클래스 선언 코드는 타입스크립트 버전 4 이상으로 컴파일할 때 노이니셜라이저+생성자없음 에러가 발생
// " //@ts-nocheck " 를 파일 맨 앞에 붙여주면 체크하지 않음으로써 오류 해결가능
// 또는 name -> name! 로 변경, 또는 tsconfig.json에서 "strictPropertyInitialization"을 true를 false로 변경

let jack1 : Person1 = new Person1()
jack1.name = 'Jack'; jack1.age = 32
console.log(jack1)

/* 생성자 
* 생성자의 매개변수(파라미터)에 접근제한자(public과 같은)를 붙이면 해당 속성이 클래스에 선언된 것처럼 동작
* 즉 Person3 의 구현을 함축한 것이 Person2
*/
class Person2 {
    constructor(public name: string, public age?: number){}
}
let jack2 : Person2 = new Person2('Jane',32)
console.log(jack2)

class Person3 {
    name: string
    age?: number
    constructor(name: string, age?: number){
        this.name = name; this.age = age
    }
}
let jack3 : Person3 = new Person3('Jack',32)
// 이때 Person3으로 타입제한이 걸려있지만 new Person2로도 정상동작 
// 마찬가지로 위의 Person2 타입제한도 new Person3로 정상동작시킬 수 있으나 코드 위치를 Person3 클래스 선언 이후로 옮겨줘야함
console.log(jack3)


/* 인터페이스 구현
* 인터페이스는 이런 속성이 있어야한다는 규약(spec)일 뿐 속성을 만들어주진 않음
* -> 클래스에서 알아서 만들어야함
* interface에 필수속성인데 클래스 내에서 ? 로 선택(optional)옵션으로 만들면 에러
*/
interface IPerson4 {
    name: string
    age?: number
}
class Person4 implements IPerson4{
    constructor(public name: string, public age: number){}
}
let jack4: IPerson4 = new Person4('Jack?',32)
console.log(jack4)

/* 추상클래스 abstract class
* 자신의 속성이나 메소드 앞에 abstract를 붙여,
* 나를 상속하는 클래스가 이 속성이나 메소드 구현을 강제함
* abstract class는 new 로 객체 생성 불가
*/
abstract class AbstractPerson5 {
    abstract name: string
    constructor(public age?: number){}
}

/* 클래스 상속
* super 키워드로 부모클래스의 생성자 호출 가능
* super를 안 쓰면 must contain a 'super' call. 에러 
*/
class Person5 extends AbstractPerson5 {
    constructor(public name: string, age?: number){
        super(age)
    }
}
let jack5 : Person5 = new Person5('Jack', 32)
console.log(jack5) // 왜 age부터 출력되지?

/* static(정적) 속성 / static member
* 인스턴스를 만들지 않고(New를 이용해 constructor를 거쳐 생성하지 않고) 접근, 사용 가능
* 해당 클래스의 인스턴스를 만들었을 때 인스턴스로는 접근 불가
*/
class A {
    static initValue = 1
}
let initVal = A.initValue
console.log(initVal)