function lowestPrices(input) {

    const result = {};

    for (let el of input) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (result.hasOwnProperty(product)) {
            if (price < result[product][0]) {
                result[product] = [price, town];
            }
        } else {
            result[product] = [price, town];
        }
    }

    for (let el in result) {
        console.log(`${el} -> ${result[el][0]} (${result[el][1]})`);
    }

}


lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
