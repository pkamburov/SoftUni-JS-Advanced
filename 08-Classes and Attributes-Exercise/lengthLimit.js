class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
        this.initialState = string;
    }

    increase(length) {
        return this.innerLength += length;
    }

    decrease(length) {
        if (this.innerLength - length < 0) {
            return this.innerLength = 0;
        } else {
            return this.innerLength -= length;
        }
    }

    toString() {
        if (this.innerString.length == 0) {
            return '...';
        } else if (this.initialState.length > this.innerLength) {
            this.innerString = Array.from(this.innerString).splice(0, this.innerLength).join('');
            this.innerString += '...';
            return this.innerString;
        } else if (this.initialState.length <= this.innerLength) {
            return this.initialState;
        }
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(5);
console.log(test.toString());
test.increase(4);
console.log(test.toString());