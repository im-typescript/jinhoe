import * as fs from "fs"

export const writeFile = (filename: string, data: any): Promise<any> =>
    new Promise((resolve, reject) => {
        fs.writeFile(filename, data, 'utf8', (error): void => { // 책의 (error: Error) 를 그대로 쓰면 Error 타입에러
            error ? reject(error) : resolve(data)
        })
    })