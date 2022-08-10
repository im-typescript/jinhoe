import { readFileSync, readFile, read } from "fs";

// package.json 파일을 동기 방식으로 읽는 예
console.log('read package.json using synchronous api...')
const buffer: Buffer = readFileSync('../package.json')
console.log(buffer.toString())

// package.json 파일을 ql동기 방식으로 읽는 예
readFile('../package.json', (error, buffer: Buffer) => {
    console.log('read package.json using asynchronous api...')
    console.log(buffer.toString())
})