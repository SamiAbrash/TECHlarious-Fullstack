const Attack = document.getElementById('attack');
function attack(){
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const current1 = bar1.value;
    const current2 = bar2.value;
    const random1 = Math.floor(Math.random() * 10) + 1;
    const random2 = Math.floor(Math.random() * 10) + 1;
    const New1 = current1 - random1;
    const New2 = current2 - random2;
    bar1.value = New1;
    bar2.value = New2;

    if (bar1.value == 0){
        windows.alet("you won! your remaining health is: " + bar2.value);
        location.reload();
    }
    if (bar2.value == 0){
        window.alert("you lost, Game Over, monster's remaining health is " + bar1.value);
        location.reload();
    }
    if ((bar1.value == 0) && (bar2.value == 0)){
        window.alert("Draw.");
        location.reload();
    }
}

function sattack(){
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");

    if (bar2.value <= 0.8*bar1.value){
        const random = Math.floor(Math.random() * 10) + 1;
        const current = bar1.value;
        const New = current - random;
        bar1.value = New;
    }
    else{
        window.alert("cannot use special attack if you health isn't monster's health by 20%");
        return;
    }
}

function heal(){

}


function giveup(){
    if (confirm("are you sure you wanna give up?")){
        alert("you gave up. Monster wins.");
        location.reload();
    }
    else {
        alert("returning");
    }
}