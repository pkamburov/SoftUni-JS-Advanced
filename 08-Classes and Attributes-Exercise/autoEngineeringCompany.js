function carCompany(input) {
    let companyMap = new Map();

    for (let currentInput of input) {
        let [brand, model, quantity] = currentInput.split(' | ');
        quantity = Number(quantity);
        // console.log(brand, ' -> ', model, ' -> ', quantity);
        if (!companyMap.has(brand)) {
            companyMap.set(brand, new Map());
        }
        
        let brandModel = companyMap.get(brand);

        if (!brandModel.has(model)) {
            brandModel.set(model, 0);
        }

        brandModel.set(model, brandModel.get(model) + quantity)
    }
    
    for (let [brand, model] of companyMap) {
        console.log(brand);
        for(let [currModel, quantity] of model) {
            console.log(`###${currModel} -> ${quantity}`);
        }
    }
}


carCompany(['Audi | Q7 | 1000', 'Audi | Q6 | 100', 'BMW | X5 | 1000', 'BMW | X6 | 100', 'Citroen | C4 | 123', 'Volga | GAZ-24 | 1000000', 'Lada | Niva | 1000000', 'Lada | Jigula | 1000000', 'Citroen | C4 | 22', 'Citroen | C5 | 10']);