function extensibleObject() {
    let obj = {
        extend: function(template) {
            for (let property in template) {
                if (typeof template[property] === 'function') {
                    Object.getPrototypeOf(obj)[property] = template[property];
                } else {
                    obj[property] = template[property];
                }
            }
        }
    };
    return obj;
};

const myObj = new extensibleObject();
const template = {
    extensionMethod: function() {},
    extensionProperty: 'somestring'
};
myObj.extend(template);
console.log(myObj);