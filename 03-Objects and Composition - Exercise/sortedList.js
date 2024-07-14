function createSortedList() {
    let collection = [];
    return {
        add: function(element) {
            collection.push(element);
            collection.sort((a, b) => a - b);
            this.size++;
        },
        remove: function(index) {
            if (index >= 0 && index < collection.length) {
                collection.splice(index, 1);
                this.size--;
            }
        },
        get: function(index) {
            if (index >= 0 && index < collection.length) {
                return collection[index];
            }
        },
        size: 0,
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);