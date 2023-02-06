//
let car = ["toyota","honda","merc","bmw"];
let c1 = car[0];
let c2 = car[1];
let c3 = car[2];
console.log(c1,c3);
//
let grades = [10,20.6,25,12,13,41];
let [first,second] = grades;
let [,,third,,fifth] = grades;
console.log(first,second);
console.log(third,fifth);

// Spread
let students = ["sami", "saeed", "salem", "salim", "samir"];
let [s1, ...otherSt] = students;
console.log(s1,otherSt);

// merging 2 arrays
let st = ["sami", "saeed", "salem", "salim", "samir"];
let age = [20,21,22,23,24,25];
let st_age = [...st,...age];
console.log(st_age);

// functions & destructuring
function names(){
    return ["sami", "saeed", "salem", "salim", "samir"];
}
let [n1,n2] = names();
console.log(n1,n2);

// Objects & Destructuring
let user = {
    username: "Sami",
    email: "samiabrashg@gmail.com"
}
let {username,email} = user;
console.log(username,email);


