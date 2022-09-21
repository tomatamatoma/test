let can = document.getElementById("can");
let con = can.getContext("2d");

can.width = 800;
can.height = 500;
can.style.backgroundColor = "blue";

con.fillStyle = "red";
con.fillRect(20,20,20,20);

setInterval( mainLoop, 1000/60);

function mainLoop() {
    con.fillStyle = "yellow";
    con.fillRect(50,50,50,50);
}