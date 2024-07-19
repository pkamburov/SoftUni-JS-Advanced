function subSum(array, startIdx, endIdx) {
    if (!Array.isArray(array)) {
        return NaN;
    } 
    
    if (startIdx < 0) {
        startIdx = 0;
    }

    if (endIdx > array.length - 1) {
        endIdx = array.length - 1;
    }

    let newArr = array.slice(startIdx, endIdx + 1).map(Number);
    let sum = 0;
    newArr.forEach(num => {
        sum += num;
    });
    return sum;

}

subSum([10, 20, 30, 40, 50, 60], 3, 300 );
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);