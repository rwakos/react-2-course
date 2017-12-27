const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject('This is my resolved data');
        resolve({
            name: 'Richard',
            age: 38
            });
    },1500);

});

console.log('before');

promise.then((data) => {
    console.log('1',data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject('This is my resolved data');
            resolve('This is my promise');
        },1500);

    });


}).then((str) => {
    console.log('Does this work?', str);
}).catch((error) => {
    console.log('error: ',error);
});


console.log('after');