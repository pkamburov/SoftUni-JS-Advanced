function solve(array, num) {
    
    for (let i = 0; i < num; i++) {
        for (let idx = 0; idx < array.length; idx++) {
            if (idx == array.length - 1) {
                array.unshift(array[idx]);
                array.pop();
            }
            array.push(array[0]);
            array.shift();
        }
    }

    console.log(array.join(' '));
}


solve(['1', '2', '3', '4'], 2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);