function solve(year, month, day) {

    let currentDay = new Date(year, month - 1, day);
    currentDay.setDate(currentDay.getDate() - 1);

    let outputYear = currentDay.getFullYear();
    let outputMonth = currentDay.getMonth() + 1;
    let outputDay = currentDay.getDate();

    console.log(`${outputYear}-${outputMonth}-${outputDay}`);

}


solve(2016, 9, 30);
solve(2015, 5, 10);