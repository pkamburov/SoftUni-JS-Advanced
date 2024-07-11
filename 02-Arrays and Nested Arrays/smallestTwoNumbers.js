function solve(array) {

    let newArray = [];

    for (let i = 0; i < 2; i++) {
        let min = Math.min(...array);
        let index = array.indexOf(min);
        let element = array.splice(index, 1);
        newArray.push(element);
    }

    console.log(newArray.join(' '));
}


solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);