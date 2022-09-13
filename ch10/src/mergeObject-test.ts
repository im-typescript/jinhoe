import { mergeObject } from "./mergeObject";

type INameable = {name: string}
type IAgeable = {age: number}

const nameAndAge: INameable & IAgeable = mergeObject({name: 'Jack'}, {age: 32});
console.log(nameAndAge);