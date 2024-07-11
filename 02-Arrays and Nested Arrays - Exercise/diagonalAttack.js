// function diagonalAttack(input) {

//     let matrix = input.map(row => row.split(' ').map(Number));
//     let mainDiagonalSum = matrix.reduce((sum, row, i) => sum + row[i], 0);
//     let secondaryDiagonalSum = matrix.reduce((sum, row, i) => sum + row[matrix.length - 1 - i], 0);

//     if (mainDiagonalSum !== secondaryDiagonalSum) {
//         return matrix.map(row => row.join(' ').join('\n'));
//     }

//     let newMatrix = matrix.map((row, i) => row.map((cell, j) => (i !== j && j !== matrix.length - 1 - i) ? mainDiagonalSum : cell));
//     console.table(newMatrix);
//     return newMatrix.map(row => row.join(' ')).join('\n');

// }


function diagonalAttack(input) {

    let matrix = input.map(row => row.split(' ').map(Number));
    let length = matrix.length;
    let mainDiagonalSum = matrix.reduce((sum, row, i) => sum + row[i], 0);
    let secondaryDiagonalSum = matrix.reduce((sum, row, i) => sum + row[length - 1 - i], 0);

    if (mainDiagonalSum !== secondaryDiagonalSum) {
        for (let el of matrix) {
            console.log(el.join(' '));
        }
        return;
    }
    
    let newMatrix = [];
    for (let i = 0; i < length; i++) {
        newMatrix.push([]);
        for (let j = 0; j < length; j++) {
            newMatrix[i].push(0);
        }
    }

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (i !== j && j !== length - 1 - i) {
                newMatrix[i][j] = mainDiagonalSum;
            } else {
                newMatrix[i][j] = matrix[i][j];
            }
        }
    }
    
    for (let el of newMatrix) {
        console.log(el.join(' '));
    }
}



diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);

// diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);