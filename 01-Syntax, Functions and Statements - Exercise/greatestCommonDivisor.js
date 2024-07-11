function solve(num1, num2) {
    for (let i = num1; i >= 1; i--) {
        if (num1 % i == 0 && num2 % i == 0) {
            console.log(i);
            break;
        }
    }
}


solve(15, 5);
solve(2154, 458);
solve(2, 1);