function carFactory(carObject) {

    const smallEngine = { power: 90, volume: 1800};
    const normalEngine = { power: 120, volume: 2400};
    const monsterEngine = { power: 200, volume: 3500};
    const newCar = {
        model: undefined,
        engine: undefined,
        carriage: undefined,
        wheels: [],
    };

    newCar.model = carObject.model;
    newCar.carriage = {};

    if (carObject.power <= 90) {
        newCar.engine = smallEngine;
    } else if (carObject.power > 90 && carObject.power < 200) {
        newCar.engine = normalEngine;
    } else {
        newCar.engine = monsterEngine;
    }

    newCar.carriage.type = carObject.carriage;
    newCar.carriage.color = carObject.color;

    if (carObject.wheelsize % 2 !== 0) {
        for (let i = 0; i < 4; i++) {
            newCar.wheels.push(carObject.wheelsize);
        }
    } else {
        let newWheelSize = carObject.wheelsize - 1;
        for (let i = 0; i < 4; i++) {
            newCar.wheels.push(newWheelSize);
        }
    }
    
    return newCar;
}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });
console.log('------------------');
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });