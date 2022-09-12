import { printValue, Valuable } from "./printValue";

printValue(new Valuable<number>(1))
printValue(new Valuable<boolean>(true))
printValue(new Valuable<string>('hello'))
printValue(new Valuable<number[]>([1,2,3,4]))

printValue(new Valuable(1))
printValue(new Valuable(true))
printValue(new Valuable('hello'))
printValue(new Valuable([1,2,3,4]))