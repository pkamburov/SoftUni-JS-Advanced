function solve(array) {

    let newArray = array.filter((a, i) => i % 2 !== 0);
    newArray = newArray.map(x => x * 2).reverse().join(' ');
    return newArray;
    
}


solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);