function argumentInfo() {
    let result = {};

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (result[type]) {
        result[type]++;
        } else {
        result[type] = 1;
        }
    }

    let sorted = Object.keys(result).sort((a, b) => result[b] - result[a]);

    for (let type of sorted) {
        console.log(`${type} = ${result[type]}`);
    }
}


argumentInfo('cat', 42, function () { console.log('Hello world!'); });