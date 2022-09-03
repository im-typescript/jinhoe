import { zip } from "../utils";
import { readFileGenerator } from "../fileApi";


export function * csvFileReaderGenerator(filenmae: string, delim: string=','){
    let header = []
    for(let line of readFileGenerator(filenmae)){
        if(!header.length)
            header = line.split(delim)
        else
            yield zip(header, line.split(delim))
    }
}