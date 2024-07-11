function magicMatrices(input) {
    
    let rowsAndColumns = [];
    let isMagical = true;

    for (let row = 0; row < input.length; row++) {
        let sum = 0;
        for (let col = 0; col < input.length; col++) {
            sum += input[row][col];
        }
        rowsAndColumns.push(sum);
    }

    for (let i = 0; i < rowsAndColumns.length; i++) {
        if (i !== rowsAndColumns.length - 1 && rowsAndColumns[i] !== rowsAndColumns[i + 1]) {
            isMagical = false;
        }
    }
    
    return isMagical;
}


magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);

magicMatrices([
    [1, 0, 0], 
    [0, 0, 1], 
    [0, 1, 0]
]);