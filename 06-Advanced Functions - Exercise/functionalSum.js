function add(input) {
    let sum = input;

    function result(newNum) {
        sum += newNum;
        return result;
    }

    result.toString = () => sum;
    return result;
}

console.log(add(1)(5).toString());