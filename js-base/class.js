// const Rectangle = class {

// };

class Rectangle {

}

class Triangle {

    #privateProperty;
    static staticProperty = 1;
 
    constructor(
        parameter1 = 'parameter1DefaultValue',
        parameter2 = 'parameter2DefaultValue'
    ) {
       this.property = parameter1;
       this.#privateProperty = parameter2;
    }

    print() {
        console.log(`Triangle: ${this.property} ${this.#privateProperty}`);
    }

    static getClassInfo() {
        console.log(this.staticProperty, 'I am a triangle class');
    }
}

function square() {

}

// console.log(Rectangle, square);

const r = new Rectangle();
const t = new Triangle('parameter1Value');

t.print();
Triangle.getClassInfo();

console.log(t);
console.log(t.__proto__.print);
