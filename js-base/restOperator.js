const rest = (argument1, ...arguments) => {
    console.log(argument1);
    console.log(arguments);
};

rest(1, 2, 3);

const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

const {a, b, ...restObject} = object;

console.log(a, b, restObject);

const array1 = [5, 6, 7, 8, 9];

const [e, f, ...restArray] = array1; 

console.log(e, f, restArray);

const useState = () => ['value', ()=> {}];

console.log(useState());

const [value, setValue] = useState();

console.log(value, setValue);
