function solve(array) {

    let middle = array.length / 2;
    let sorted = array.sort((a, b) => a - b);
    let spliced = sorted.splice(middle);
    return spliced;

}


solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);