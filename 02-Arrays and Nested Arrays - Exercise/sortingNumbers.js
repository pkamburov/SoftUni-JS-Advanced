function sortingNumbers(array) {
    let smallest = [...array];
    let biggest = [...array];
    smallest.sort((a, b) => a - b);
    biggest.sort((a, b) => b - a);
    let outputArray = [];

    for (let i = 1; i <= array.length; i++) {
        if (i == 1 || i % 2 !== 0) {
            outputArray.push(smallest[0]);
            smallest.shift();
        } else if (i % 2 == 0) {
            outputArray.push(biggest[0]);
            biggest.shift();
        }
    }
    console.log(smallest);
    console.log(biggest);
    console.log(outputArray);
    return outputArray;
}


sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);