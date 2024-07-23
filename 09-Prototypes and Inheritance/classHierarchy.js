function classHierarchy() {

    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {

        }

        changeUnits(unit) {
            this.units = unit;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units = 'cm') {
            super(units);
            this.radius = radius;
        }
        
        get area() {
            if (this.units == 'm') {
                return (Math.PI * this.radius * this.radius) / 100;
            } else if (this.units = 'cm') {
                return Math.PI * this.radius * this.radius;
            } else {
                return (Math.PI * this.radius * this.radius) * 100;
            }
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            if (this.units == 'm') {
                return (this.width * this.height) / 100;
            } else if (this.units == 'cm') {
                return this.width * this.height;
            } else {
                return (this.width * this.height) * 100;
            }
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let { Figure, Circle, Rectangle } = classHierarchy();

let c = new Circle(5);
console.log(c.area);
console.log(c.toString());

let r = new Rectangle(3, 4, 'mm');
console.log(r.area);
console.log(r.toString());

r.changeUnits('cm');
console.log(r.area);