function storeCatalogue(input) {

    const result = {};
    input.sort((a, b) => a.localeCompare(b));

    for (let el of input) {
        let [productName, productPrice]  = el.split(' : ');
        productPrice = Number(productPrice);
        let startingLetter = el[0];
        
        if (!result[startingLetter]) {
            result[startingLetter] = [];
        }

        result[startingLetter].push({ productName, productPrice});
    }

    for (let el in result) {
        console.log((el));
        for (let product of result[el]) {
            console.log(`${product.productName}: ${product.productPrice}`);
        }
    }

}

storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
console.log('------------');
storeCatalogue(['Banana : 2', "Rubic's Cube : 5", 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']);