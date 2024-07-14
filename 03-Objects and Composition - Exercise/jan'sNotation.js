function solve(input) {
    
    let collection = [];
    let result = 0;

    for (let el of input) {
        if (typeof el === 'number') {
            collection.push(el);
        } else {
            if (el == '+') {
                if (collection.length < 2) {
                    return console.log('Error: not enough operands!');
                } else {
                    result = collection[collection.length - 2] + collection[collection.length - 1];
                    collection.pop();
                    collection.pop();
                    collection.push(result);    
                }

            } else if (el == '-') {
                if (collection.length < 2) {
                    return console.log('Error: not enough operands!');
                } else {
                    result = collection[collection.length - 2] - collection[collection.length - 1];
                    collection.pop();
                    collection.pop();
                    collection.push(result);    
                }

            } else if (el == '*') {
                if (collection.length < 2) {
                    return console.log('Error: not enough operands!');
                } else {
                    result = collection[collection.length - 2] * collection[collection.length - 1];
                    collection.pop();
                    collection.pop();
                    collection.push(result);    
                }

            } else if (el == '/') {
                if (collection.length < 2) {
                    return console.log('Error: not enough operands!');
                } else {
                    result = collection[collection.length - 2] / collection[collection.length - 1];
                    collection.pop();
                    collection.pop();
                    collection.push(result);    
                }

            }
        }
    }

    if (collection.length == 1) {
        console.log(collection[0]);
    } else if (collection.length > 1) {
        console.log('Error: too many operands!');
    } 

}


// solve([3, 4, '+']);
solve([5, 3, 4, '*', '-']);
// solve([7, 33, 8, '-']);
// solve([15, '/']);