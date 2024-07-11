function sortBy2(array) {

    let sorted = array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    
    console.log(sorted.join('\n'));
}


sortBy2(['alpha',
'beta',
'gamma']);

sortBy2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortBy2(['test', 'Deny', 'omen', 'Default']);