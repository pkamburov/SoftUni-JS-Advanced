class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.size++;
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        return this;
    }

    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.size--;
            this.list.splice(index, 1);
            this.list.sort((a, b) => a - b);
        }
        return this;
    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        } 
    }
}

let list = new List();
list.add(5);
console.log(list.get(0));
list.add(3);
console.log(list.get(0));
list.remove(0);
console.log(list.get(0));
console.log(list.size);