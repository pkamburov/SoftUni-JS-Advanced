function solve(array, num) {
    let outputArray = [];
    for (let i = 0; i < array.length; i += num) {
        outputArray.push(array[i]);
    }
    return outputArray;
}


solve(['5',
'20',
'31',
'4',
'20'],
2);

solve(['dsa', 'asd', 'test', 'tset'], 2);

solve(['1', '2', '3', '4', '5'], 6);