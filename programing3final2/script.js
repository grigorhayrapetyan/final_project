var side = 20;
var socket = io();

style = "standart";

function handleStyle() {
    document.getElementById("weather").style.color = 'white';
    style = "black"
    document.bgColor='black'
}
function handleStyle2() {
    document.getElementById("weather").style.color = 'black';
    style = "standart"
    document.bgColor='white'
}

var m = 20;
var n = 20;

function setup() {
    frameRate(5);
    //createCanvas(matrix[0].length * side, matrix.length * side);
    createCanvas(n*side,m*side);
    background('#acacac');


}
socket.on("k", function(weather){
    document.getElementById('weather').innerText = weather;
})
function drawMatrix(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if (style == "black"){
                    fill("#7bc360")
                }
                else fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                if (style == "black"){
                    fill("#999900")
                }
                else fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                if (style == "black"){
                    fill("#ff3333")
                }    
                else fill("#cc0000");
            }
            else if (matrix[y][x] == 5) {
                if (style == "black"){
                    fill("#8cff1a")
                }
                else fill("#59b300");
            }
            else if (matrix[y][x] == 4) {
                if (style == "black"){
                    fill("#0000cc")
                }
                else fill("#3333ff");
            }
            else if (matrix[y][x] == 6) {
                if (style == "black"){
                    fill("#cc6600")
                }
                else fill("#663300");
            }
            rect(x * side, y * side, side, side);

        }
    }
}


socket.on("matrix",drawMatrix);