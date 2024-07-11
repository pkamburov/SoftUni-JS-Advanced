function solve(input) {
    
    let mainDiagonal = [];
    let secondaryDiagonal = [];
    let result = [];
    let firstSum = 0;
    let secondSum = 0;
    let length = input.length;
    let padding = 0;

    for (let row = 0; row < length; row++) {
        for (let col = 0; col < length; col++) {
            mainDiagonal.push(input[row][padding]);
            padding++;
            break;
        }
    }

    padding = 0;

    for (let row = length - 1; row >= 0; row--) {
        for (let col = 0; col < length; col++) {
            secondaryDiagonal.push(input[row][padding]);
            padding++;
            break;
        }
    }

    mainDiagonal.forEach(el => firstSum += el);
    result.push(firstSum);
    secondaryDiagonal.forEach(el => secondSum += el);
    result.push(secondSum);
    console.log(result.join(' '));
}


solve([[20, 40], [10, 60]]);
solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);