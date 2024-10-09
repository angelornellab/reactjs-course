const fn = (a, b, c) => console.log(a + b + c);

const array1 = [1, 2, 3];

// fn(arr[0], arr[1], arr[2]);
fn(...array1);

const array2 =[5, 6];

// const mergeArray = array1.concat(array2);
// const mergeArray = [...array1, ...array2];
const mergeArray = [...array1, 2, 3];

console.log(mergeArray);

const object1 = {
    a: 1,
    b: 2,
};

const object2 = {
    b: 5,
    c: 'x',
};

const object3 = {
    ...object1,
    loading: true,
    data: {
        prop: 'lala',
    },

};

const mergeObject = {...object1, ...object2};

console.log(mergeObject);
console.log(object3);
