function solve(input) {
    
    let newArray = [];
    
    for (let el of input) {
        let biggestNum = Math.max(...el);
        newArray.push(biggestNum);
    }

    let result = Math.max(...newArray);
    return result;
}


solve([[20, 50, 10], [8, 33, 145]]);
solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);