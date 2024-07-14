function rectangle(width, heigth, color) {

    let newColor = color[0].toUpperCase() + color.slice(1);

    const rectangle = {
        width: width,
        height: heigth,
        color: newColor,
        calcArea: function() {
            return this.width * this.height;
        }
    };

    return rectangle;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());
