function solve(array) {
    let first = array[0];
    let last = array[array.length - 1];
    let sum = Number(first) + Number(last);
    return sum;
}


solve(['20', '30', '40']);
solve(['5', '10']);