function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName
    };

    Object.defineProperty(result, 'fullName', {
        enumerable: true,
        configurable: true,
        get() {
            return `${result.firstName} ${result.lastName}`;
        },
        set(value) {
            [result.firstName, result.lastName] = value.split(' ');
        }
    });
    return result;
};


let person = createPerson('Albert', 'Simpson');
console.log(person.fullName);
person.firstName = 'Simon';
console.log(person.fullName);



