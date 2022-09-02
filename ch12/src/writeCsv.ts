import { writeCsvformatFakeData } from "./fake";
import { getFileNameAndNumber } from "./utils/getFileNameAndNumber";

const [filename, numberOfFakeData] = getFileNameAndNumber('./data/fake', 1)
const csvFilename = `${filename}-${numberOfFakeData}.csv`
writeCsvformatFakeData(csvFilename, numberOfFakeData)
    .then(result => console.log(result))
    .catch((e:Error) => console.log(e.message))