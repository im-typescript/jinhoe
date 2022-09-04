import * as fs from 'fs'

export function * readFileGenerator(filename: string): any {
    let fd: any

    try {
        fd = fs.openSync(filename, 'rs')
        const stats = fs.fstatSync(fd)
        const bufferSize = Math.min(stats.size, 512)
        const buffer = Buffer.alloc(bufferSize)
        let filepos = 0, line

        while(filepos > -1){ // 여기서 라인이 잘못 쪼개지는 거 같은데 ?
            [line, filepos] = readLine(fd, buffer, bufferSize, filepos)
            // console.log("readFileGenerator - line: ");
            // console.log(line);
            if(filepos > -1){
                yield line
            }
        }
        yield buffer.toString() // 마지막 줄    
    } catch(e: any) {
        console.error('readLine:', e.message); // e 개체가 알 수 없는 형식입니다? 타입에러? -> :any를 줘서 일단 넘김
    } finally {
        fd && fs.closeSync(fd)
    }
}


function readLine(fd: any, buffer: Buffer, bufferSize: number, position: number): [string, number] {
    let line = '';
    let readSize;
    const crSize = '\n'.length

    while(true) {
        readSize = fs.readSync(fd, buffer, 0, bufferSize, position);
        // console.log("readLine 37 -position, crSize ");
        // console.log(position, crSize);
        if(readSize > 0){
            const temp = buffer.toString('utf8', 0, readSize)
            // console.log("temp: ");
            // console.log(temp);
            const index = temp.indexOf('\n')

            if(index > -1){

                line += temp.substr(0, index);
                position += index + crSize;
                // console.log("readLine 44 - line: ");
                // console.log(index, crSize, line);
                break
            } else {
                line += temp;
                position += temp.length;
            }
            // console.log("readLine 51 - line: ");
            // console.log(line);
        } else {
            position = -1 // end of file
            break;
        }
    }
    return [line.trim(), position]
}


