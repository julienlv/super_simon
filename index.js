var a = 0;
function add(){
    a++;
    document.getElementById('score').innerHTML = a;
}

function reset(){
	document.getElementById('score').innerHTML = 0;
    return a = 0;
}

function playGreen () {
    document.getElementById('playgreen').play();
}

function playRed () {
    document.getElementById('playred').play();
}

function playYellow () {
    document.getElementById('playyellow').play();
}

function playBlue () {
    document.getElementById('playblue').play();
}

function myFunction() {
    document.getElementById('green').click();
}