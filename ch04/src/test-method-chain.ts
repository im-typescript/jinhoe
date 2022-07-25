
class Calculator {
    constructor(public value: number = 0){}

    add(val: number){
        this.value += val
        return this
    }

    multiply(valu: number){
        this.value *= valu
        return this
    }
}

let calc = new Calculator
console.log(calc)

let resulta = calc.add(3).multiply(5)
console.log(resulta)
