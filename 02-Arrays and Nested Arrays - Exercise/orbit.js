function orbit(input) {

    let [width, height, x, y] = input;
    let matrix = [];

    for (let i = 0; i < height; i++) {
        matrix.push(Array(width).fill(0));
    }
    setCellValue(matrix, x, y, 0, 1);

    for (let orbit = 2; orbit <= Math.max(width, height); orbit++) {
        for (let i = Math.max(0, x - orbit + 1); i < Math.min(height, x + orbit); i++) {
            for (let j = Math.max(0, y - orbit + 1); j < Math.min(width, y + orbit); j++) {
                if (matrix[i][j] == 0) {
                    setCellValue(matrix, i, j, 0, orbit);
                }
            }
        }
    }

    const result = matrix.map(row => row.join(' ')).join('\n');
    console.log(result);

    function setCellValue(matrix, x, y, oldValue, newValue) {
        if (matrix[x] && matrix[x][y] === oldValue) {
            matrix[x][y] = newValue;
        }
    }
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);