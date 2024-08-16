var noOfSquares = 6;
//pallet
var arr = [];
//color picked for target
var picked;
//to get all the squares div
var squares = document.getElementsByClassName("square");
//to get the RGB display
var targetColor = document.getElementById("targetColor");
//message that can be empty, try again or correct
var message = document.getElementById("message");
//heading
var head = document.querySelector("h1");
//reset button
var reset = document.getElementById("NewColor");

init();

function init() {
    // Set up squares
    setupSquares();
    // Set up reset button
    setupResetButton();
    // Reset the game
    resetGame();
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === picked) {
                message.textContent = "Correct!";
                message.style.color = "green";
                changeColor(clickedColor);
                reset.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again";
                message.style.color = "red";
            }
        });
    }
}

function setupResetButton() {
    reset.addEventListener("click", resetGame);
}

function resetGame() {
    // Generate new colors
    arr = generateRandomColor(noOfSquares);
    // Pick a new random color
    picked = arr[randomPickedColorIndex()];
    // Change targetColor display to match picked color
    targetColor.textContent = picked;
    message.textContent = "";
    reset.textContent = "New Colors";
    head.style.backgroundColor = "steelblue";
    // Change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (arr[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = arr[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function randomPickedColorIndex() {
    return Math.floor(Math.random() * arr.length);
}

function generateRandomColor(limit) {
    var color = [];
    for (var i = 0; i < limit; i++)
        color.push(rgbGenerator());
    return color;
}

function rgbGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    head.style.backgroundColor = color;
}
