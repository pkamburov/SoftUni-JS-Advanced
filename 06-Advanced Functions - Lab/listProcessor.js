function listProcessor(input) {

    let result = [];
    for (let el of input) {
        let [command, string] = el.split(' ');
        if (command == 'add') {
            result.push(string);
        } else if (command == 'remove') {
            let filteredResult = result.filter(e => e !== string);
            result = filteredResult;
        } else {
            console.log(result.join(','));
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);