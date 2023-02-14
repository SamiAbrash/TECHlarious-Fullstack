function attack(){
const bar1 = document.getElementById("pBar1");
const bar2 = document.getElementById("pBar2");
const decreaseButton = document.getElementById("attack");

decreaseButton.addEventListener("click", function() {
  let width = bar1.offsetWidth;
  let decreaseBy = Math.floor(Math.random() * 50);
  width -= decreaseBy;
  width = width < 0 ? 0 : width;
  bar1.style.width = width + "px";
});
decreaseButton.addEventListener("click", function() {
  let width = bar2.offsetWidth;
  let decreaseBy = Math.floor(Math.random() * 50);
  width -= decreaseBy;
  width = width < 0 ? 0 : width;
  bar2.style.width = width + "px";
});
}

function sattack(){
  const bar1 = document.getElementById("pBar1");
  const decreaseButton = document.getElementById("sattack");

  decreaseButton.addEventListener("click", function() {
    let width = bar1.offsetWidth;
    let decreaseBy = Math.floor(Math.random() * 50);
    width -= decreaseBy;
    width = width < 0 ? 0 : width;
    bar1.style.width = width + "px";
  });
}

function heal(){
  const bar2 = document.getElementById("pBar2");
  const decreaseButton = document.getElementById("heal");

  decreaseButton.addEventListener("click", function() {
    let width = bar2.offsetWidth;
    let decreaseBy = Math.floor(Math.random() * 50);
    width += decreaseBy;
    width = width < 0 ? 0 : width;
    bar2.style.width = width + "px";
  });
}

function giveup() {
  location.reload();
}
