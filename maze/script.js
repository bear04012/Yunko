var y=85
var x=10


function move_down() {
    let ball = document.querySelector("#ball");
    y = y + 20;
    ball.style.top = y+"px";
}
function move_up() {
    let ball = document.querySelector("#ball");
    y = y - 20;
    ball.style.top = y+"px";
}
function move_right() {
    let ball = document.querySelector("#ball");
    x = x + 20;
    ball.style.left = x+"px";
}
function move_left() {
    let ball = document.querySelector("#ball");
    x = x - 20;
    ball.style.left = x+"px";
}