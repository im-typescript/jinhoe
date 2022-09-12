interface Lengthwise {
    length: number;
}


function identity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg;
}
