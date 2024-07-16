function breakfastRobot() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    
    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    }

    function manageOrders(instruction) {
        let [command, element, qty] = instruction.split(' ');

        if (command == 'restock') {
            ingredients[element] += Number(qty);
            return "Success";
        } else if (command == 'prepare') {
            let recipe = recipes[element];

        for (let ingredient in recipe) {
            if (ingredients[ingredient] < recipe[ingredient] * qty) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        for (let ingredient in recipe) {
            ingredients[ingredient] -= recipe[ingredient] * qty;
        }

        return "Success";
    } else if (command == 'report') {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
    }
    }
    return manageOrders;
}

let manager = breakfastRobot();
console.log(manager ('restock flavour 50'));
console.log(manager ('prepare lemonade 4'));