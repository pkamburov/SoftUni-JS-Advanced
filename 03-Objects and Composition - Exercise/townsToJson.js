function towns(input) {

    const result = [];
    let [h1, h2, h3] = input[0].split(' | ');
    let townHeader = h1.substring(1).trim();
    let longitudeHeader = h3.slice(0, -1).trim();

    for (let i = 1; i < input.length; i++) {
        let [town, latitude, longitude] = input[i].split(' | ');
        let newTown = town.substring(1).trim();
        let newLongitude = longitude.slice(0, -1).trim();
        newLongitude = Number(newLongitude).toFixed(2);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        const jsonObj = {
            [townHeader]: newTown,
            [h2]: Number(latitude),
            [longitudeHeader]: Number(newLongitude)
        }

        result.push(jsonObj);
    }

    return JSON.stringify(result);
}


towns(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);
console.log('----------');
towns(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);