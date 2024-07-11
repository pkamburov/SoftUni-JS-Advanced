function solve(inputArray) {
    
    let outputArray = [];
    let currentNum = 1;
    for (let el of inputArray) {
        if (el == 'add') {
            outputArray.push(currentNum);
            currentNum++;
        } else {
            outputArray.pop();
            currentNum++;
        }
    }

    if (outputArray.length > 0) {
        console.log(outputArray.join('\n'));
    } else {
        console.log('Empty');
    }
}


solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);