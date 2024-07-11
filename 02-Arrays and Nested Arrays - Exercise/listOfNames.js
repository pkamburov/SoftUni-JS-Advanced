function listOfNames(array) {
    array.sort((a, b) => a.localeCompare(b));
    for (let i = 1; i <= array.length; i++) {
        console.log(`${i}.${array[i - 1]}`);
    }
}


listOfNames(["John",
"Bob",
"Christina",
"Ema"]);