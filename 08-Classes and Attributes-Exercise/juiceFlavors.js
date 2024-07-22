function juiceFlavors(input) {
    let juices = {};
    let bottles = {};
    let bottlesMap = new Map();

    for (let currentInput of input) {
        let [juiceName, quantity] = currentInput.split(' => ');
        if (!juices[juiceName]) {
            juices[juiceName] = Number(quantity);
        } else {
            juices[juiceName] += Number(quantity);
        }

        if (juices[juiceName] >= 1000) {
            bottles[juiceName] = Math.floor(Number(juices[juiceName]) / 1000);
            juices[juiceName] += juices[juiceName] % 1000;
            bottlesMap.set(juiceName, bottles[juiceName]);
        }
    }

    for (let [juice, quantity] of bottlesMap) {
        console.log(`${juice} => ${bottles[juice]}`);
    }
}


juiceFlavors(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
console.log('--------------------');
juiceFlavors(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);