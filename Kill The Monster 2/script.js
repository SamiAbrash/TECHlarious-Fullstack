
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
//
const a = document.getElementById('attack');
a.addEventListener('click', attack);

function attack(){
    let random1 = Math.floor(Math.random() * 10) + 1;
    let New1 = bar1.value - random1;
    bar1.value = New1;

    let random2 = Math.floor(Math.random() * 10) + 1;
    let New2 = bar2.value - random2;
    bar2.value = New2;

    if (bar1.value === 0){
        window.alert("You WIN! Your remaining health is: " + bar2.value);
        location.reload();
    }
    if (bar2.value === 0){
        window.alert("You Lose. Monster's remaining health is: " + bar1.value);
        location.reload();
    }
    if (bar1.value === 0 && bar2.value === 0){
        window.alert("Draw. Click OK to Restart");
        location.reload();
    }
}
//
const h = document.getElementById('heal');
h.addEventListener('click',heal);

let counter = 3;
function heal(){
    if (bar2.value === 100){
        window.alert("You can't heal when your health is 100.");
    }
    if (bar2.value < 100 && counter > 0){
            let random = Math.floor(Math.random() * 10) + 1;
            let New = bar2.value + random;
            bar2.value = New;
    }
    if (counter === 0){
        window.alert("you can't heal more than 3 times!");
    }
    counter--;
}
//
const g = document.getElementById('giveup');
g.addEventListener('click',giveup);

function giveup(){
    if (confirm("are you sure you wanna give up?")){
        alert("you gave up. Monster wins.");
        location.reload();
    }
    else {
        alert("returning");
    }
}

//
const newGame = document.getElementById('newGame');
newGame.addEventListener('click',function(){
    if (confirm("are you sure you wanna start a new game?")){
        location.reload();
    }
    else {
        return;
    }
});

//
const sa = document.getElementById('sattack');
sa.addEventListener('click',sattack);

function sattack(){
    let random1 = Math.floor(Math.random() * 20) + 1;
    let New1 = bar1.value - random1;
    bar1.value = New1;

    let random2 = Math.floor(Math.random() * 10) + 1;
    let New2 = bar2.value - random2;
    bar2.value = New2;

    if (bar1.value === 0){
        window.alert("You WIN! Your remaining health is: " + bar2.value);
        location.reload();
    }
    if (bar2.value === 0){
        window.alert("You Lose. Monster's remaining health is: " + bar1.value);
        location.reload();
    }
    if (bar1.value === 0 && bar2.value === 0){
        window.alert("Draw. Click OK to Restart");
        location.reload();
    }
}
function saClick(){
    if (bar2.value < bar1.value*0.8){
        sa.disabled = false;
    }
    else {
        sa.disabled = true;
    }
}
saClick();