import { zip } from "../utils";
import { readFileGenerator } from "../fileApi";


export function * csvFileReaderGenerator(filename: string, delim: string=','){
    let header = []
    for(let line of readFileGenerator(filename)){
        // console.log(line);
        // console.log(line.split(delim));
        if(!header.length)
            header = line.split(delim)
        else
            yield zip(header, line.split(delim))
    }
}