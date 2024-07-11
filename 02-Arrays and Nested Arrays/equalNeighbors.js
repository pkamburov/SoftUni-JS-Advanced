function solve(input) {
    let counter = 0;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length - 1; col++) {
            if (input[row][col] === input[row][col + 1]) {
                counter++;
            }
        }
    }

    for (let col = 0; col < input.length - 1; col++) {
        for (let row = 0; row < input[col].length; row++) {
            if (input[col][row] === input[col + 1][row]) {
                counter++;
            }
        }
    }
    return counter;
}


solve([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]);

// solve([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]);

// solve([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'], 
// ['not', 'done', 'yet', '5']]);