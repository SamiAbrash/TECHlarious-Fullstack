// all and race promise

const p1 = new Promise ((resolve,reject) => {
    resolve("Promise one");
});

const p2 = new Promise ((resolve,reject) => {
    resolve("Promise two");
});

Promise.all([p1,p2]).then((messages) => {
    console.log(messages);
});

Promise.race([p1,p2]).then((messages) => {
    console.log(messages);
}); 