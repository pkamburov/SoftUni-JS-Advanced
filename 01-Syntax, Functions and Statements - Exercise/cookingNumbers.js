function cookingByNumbers(number, ...commands) {

    for (let command of commands) {
        if (command == 'chop') {
            number /= 2;
        } else if (command == 'dice') {
            number = Math.sqrt(number);
        } else if (command == 'spice') {
            number += 1;
        } else if (command == 'bake') {
            number *= 3;
        } else if (command == 'fillet') {
            number -= number * 0.2;
        }
        console.log(number);
    }
}


cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');