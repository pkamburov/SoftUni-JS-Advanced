function cars(input) {
    const objects = {};

    function create(name, parentName) {
        if (parentName) {
            const parent = Object.assign({}, objects[parentName]);
            objects[name] = Object.create(parent);
        } else {
            objects[name] = {};
        }
    }

    function set(name, key, value) {
        if (objects[name]) {
            objects[name][key] = value;
        }
    }

    function print(name) {
        if (objects[name]) {
            const result = [];
        }
    }
}


cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])