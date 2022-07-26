
const identity = <T>(n: T): T => n
let a = identity({name: 'jack'})
console.log (
    identity<boolean>(true),
    identity("something"),
    identity("ad"),
    identity(1),
    identity(false),
    identity([1,2,3]),
    identity({name: 'jack'}),
    a
)

const f = <T>(cb: (arg: T, i?: number) => number): void => {}
