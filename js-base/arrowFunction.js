function fn() {
    this.property = 'property';

    // return this
};

fn.prototype.fnProtype = function fnProtype() {};

const getFn = new fn();

console.log(getFn.__proto__);

// have no context of 'THIS'
const arrowFn = () => { 
    const object = {};

    object.property = 'property';

    return object;
};

const getArrowFn = arrowFn();

console.log(getArrowFn);

const implicitArrowFn = () => 'implicitValue';

console.log(implicitArrowFn());
