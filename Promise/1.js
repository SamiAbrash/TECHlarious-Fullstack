// basic promise

let p = new Promise((resolve,reject) => {
    let dev = {name:"Sami", goodDeveloper:true};

    if (dev.goodDeveloper === true){
        resolve("Sami is a good Dev");
    }
    else {
        reject("Sami isn't a good Dev");
    }
});

p.then((message) => {
    console.log("inside the 'Then' block => " + message);
}).catch((message) => {
    console.log("inside the 'Catch' block => " + message);
}) 