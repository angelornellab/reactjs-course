const array1 = [0, 1, 2, 3, 4];

// const result = array1.filter(element => element > 2);
const result = array1.filter((element, i) => {
    console.log(i);
    return element > 2;
});

console.log(result);

const mapped = array1.map((element) => `<h1>${element}</h1>`);

console.log(mapped);

const users = [
    {
        id: 1,
        name: 'user1',
    },
    {
        id: 2,
        name: 'user2',
    },
    {
        id: 3,
        name: 'user3',
    },
    {
        id: 4,
        name: 'user4',
    },
];

const userMapped = users.map((user) => `<h1>${user.name}</h1>`);

console.log(userMapped);

const arrayReduce = array1.reduce((acc, element) => acc + element, 0);

console.log(arrayReduce);

const userReduce = users.reduce((acc, element) => {
    if (element.id < 2) {
        return acc;
    }

    return acc.concat(element);

}, []);  

console.log(userReduce);
