
let a = 'he_l_lo';

let b = a.split('');

console.log(b);
console.log(Array.isArray(a)) // isArray는 Array 클래스의 static 메서드인 거구나.
// 그래서 인스턴스가 아닌 클래스이름으로 호출하고 자기 자신의 인스턴스인지를 판별해주는 메서드인 것이군?
// 자바스크립트에서 배열은 다른 언어와 다르게 객체의 일종 == Array클래스의 인스턴스이기 때문

export const split = (str: string, delim: string = ''): string[] => str.split(delim)

console.log(split('hello'))

console.log(b.join(''))

export const join = (strArray: string[], delim: string=''):string => strArray.join(delim)

console.log(join(b,"!"))

let [first, s, t, ...rest] = b //destructuring 배열의 비구조화 할당
console.log(first, s, t, rest)

let i: string; // 반복문 내의 i(index) 변수는 string or any만 가능 - 보통은 그냥 for문 안에서 let으로 선언하는 듯 for(let index in b) 
for (i in b){ // for .. in 반복문, 배열은 index 순으로 반복
    const char = b[i]
    console.log(`[${i}]: ${char}?`)
    console.log(typeof i)
}

let jack = {name: 'Jack', age: 32}
for(let prop in jack){ // for .. in 반복문, 객체는 속성 순으로 반복
    console.log(`${prop} : ${jack[prop]}, ${jack.name}`) // for..in문 내에서 객체의 속성을 부를 때는 배열에서 인덱스로 불러올 때처럼 [] 이용
}

// for..of 문은 배열의 index가 아닌 item value를 갖고 순환 cc가 각 값, b가 array
for(let cc of b){ // php의 foreach문 - foreach(b as cc) 와 비슷
    console.log(cc)
}





