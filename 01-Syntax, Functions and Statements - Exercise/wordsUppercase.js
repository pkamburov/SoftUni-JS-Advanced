function words(string) {
    let pattern = /\w+/gm;
    let matches = string.match(pattern);
    let result = [];
    for (let match of matches) {
        let newMatch = match.toUpperCase();
        result.push(newMatch);
    }
    console.log(result.join(', '));
}
words('Hi, how are you?');
words('hello');