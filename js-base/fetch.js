const url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url)
//     .then((response) => response.json())
//     .then(data => console.log(data));

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer',
//     },
//     body: JSON.stringify({
//         name: 'user1',
//         website: 'google.com',
//     }),
// })
//     .then((response) => response.json())
//     .then(data => console.log(data));   

const asyncFn = async () => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer',
        },
        body: JSON.stringify({
            name: 'user1',
            website: 'google.com',
        }),
    });

    const data = await response.json();

    console.log(data);
};

asyncFn();
