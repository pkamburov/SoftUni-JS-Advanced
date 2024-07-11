function spiralMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(Array(cols).fill(0));
    }

    let firstNum = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols -1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = firstNum++;
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            matrix[row][endCol] = firstNum++;
        }
        endCol--;

        if (startRow <= endRow) {
            for (let col = endCol; col >= startCol; col--) {
                matrix[endRow][col] = firstNum++;
            }
            endRow--;
        }

        if (startCol <= endCol) {
            for (let row = endRow; row >= startRow; row--) {
                matrix[row][startCol] = firstNum++;
            }
            startCol++;
        }
    }

    let result = matrix.map(row => row.join(' ')).join('\n');
    console.log(result);
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);