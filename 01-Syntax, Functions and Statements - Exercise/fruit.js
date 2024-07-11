function solve(fruit, weight, pricePerKg) {
    let weightInKg = weight / 1000;
    let total = weightInKg * pricePerKg;
    console.log(`I need $${total.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}


solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);