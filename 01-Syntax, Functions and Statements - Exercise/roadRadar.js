function roadRadar(speed, area) {
    let speedDifference = 0;
    let allowedSpeed = 0;
    let status = '';

    if (area == 'motorway') {
        allowedSpeed = 130;
        if (speed > allowedSpeed) {
            speedDifference = speed - allowedSpeed;
        }
    } else if (area == 'interstate') {
        allowedSpeed = 90;
        if (speed > allowedSpeed) {
            speedDifference = speed - allowedSpeed;
        }
    } else if (area == 'city') {
        allowedSpeed = 50;
        if (speed > allowedSpeed) {
            speedDifference = speed - allowedSpeed;
        }
    } else if (area == 'residential') {
        allowedSpeed = 20;
        if (speed > allowedSpeed) {
            speedDifference = speed - allowedSpeed;
        }
    }

    if (speedDifference > 40) {
        status = 'reckless driving';
    } else if (speedDifference > 20) {
        status = 'excessive speeding';
    } else if (speedDifference > 0) {
        status = 'speeding';
    }

    if (speedDifference > 0) {
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`)
    } else {
        console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`)
    }
}


roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');