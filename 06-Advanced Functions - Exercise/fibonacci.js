function fibonacci() {
    let start = 1;
    let next = 1;

    return function() {
        let result = start;
        [start, next] = [next, start + next];
        return result;
    };
}

let fib = fibonacci();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
