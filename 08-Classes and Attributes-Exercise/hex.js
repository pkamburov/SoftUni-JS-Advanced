class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(number) {
        let operand;
        if (number instanceof Hex) {
            operand = number.valueOf();
        } else {
            operand = number;
        }
        return new Hex(this.value + operand);
    }

    minus(number) {
        let operand;
        if (number instanceof Hex) {
            operand = number.valueOf();
        } else {
            operand = number;
        }
        return new Hex(this.value - operand);
    }

    parse(hexString) {
        let decimalValue = parseInt(hexString, 16);
        let newHex = new Hex(decimalValue);
        return newHex.value;
    }
}

let FF = new Hex(255); 
console.log(FF.toString()); 
FF.valueOf() + 1 == 256; 
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString()); 
console.log(a.plus(b).toString()==='0xF'); 
console.log(FF.parse('AAA'));