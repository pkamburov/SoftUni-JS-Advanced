function solve(array) {
    newArray = [];
    for (let el of array) {
        if (el < 0) {
            newArray.unshift(el);
        } else {
            newArray.push(el);
        }
    }
    newArray.forEach(element => {
        console.log(element);
    });
}


solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);