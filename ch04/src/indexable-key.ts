
const makeObject = (keya, valuea) => ({[keya]: valuea}) // 색인가능타입 

console.log(makeObject('name','Jack'))

type KeyVaType = {
    [oing: string]: string
}

const makeObject2 = (keya: string, valuee: string): KeyVaType => ({[keya]: valuee})
console.log(makeObject2('wow','real'))