function solve(length, elementCount) {
    let sequence = [1];
    for (let i = 1; i < length; i++) {
        let sum = 0;
        for (let j = i - 1; j >= Math.max(0, i - elementCount); j--) {
            sum += sequence[j];
        }
        sequence.push(sum);
    }
    return sequence;
}


solve(6, 3);
solve(8, 2);