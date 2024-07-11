function solve(array) {

    let newArray = [];
    let biggestNum = 0;

    for (let el of array) {
        if (el >= biggestNum) {
            newArray.push(el);
            biggestNum = el;
        }
    }
    return newArray;
}


// solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// solve([1, 2, 3, 4]);
// solve([20, 3, 2, 15, 6, 1]);
solve([25, 0, -1, 11, 25]);