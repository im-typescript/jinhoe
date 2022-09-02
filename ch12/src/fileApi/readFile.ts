import * as fs from 'fs'

export const readFile = (filename: string) : Promise<any> =>
    new Promise<any>((resolve, reject) => {
        fs.readFile(filename, 'utf8', (error, data: any) => { // :Error 타입에러 
            error ? reject(error) : resolve(data)
        })
    })


// 아래는 doitstudyroom 네이버카페에서 다운로드받은 소스코드
// export const readFile = (filename: string) : Promise<any> => 
// new Promise<any>((resolve, reject) => {
//   fs.readFile(filename, 'utf8', (error: Error, data: any) => {
//     error ? reject(error) : resolve(data)
//   })
// })