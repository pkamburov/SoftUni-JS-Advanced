function sameNumbers(number) {
    let numAsStr = String(number);
    let firstDigit = numAsStr[0];
    let isSame = true;
    let counter = 0;
    
    for (let digit of numAsStr) {
        if (digit !== firstDigit) {
            isSame = false;
        }
        counter += Number(digit);
    }
    
    console.log(isSame);
    console.log(counter);
}


sameNumbers(2222222);
sameNumbers(1234);