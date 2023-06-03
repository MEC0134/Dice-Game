var heading = document.querySelector('#my-heading');

// Create an array to store the image file paths
var diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

// Set Default content for heading 
document.addEventListener('DOMContentLoaded', () => {
    heading.textContent = "Click Button To Play!";
});

// Function to handle play again btn 
function playGame() {
    // Create a random number variable to represent the players' dice 
    var randomNumber1 = getRandomNumber();
    var randomNumber2 = getRandomNumber();

    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");

    // Remove the "roll" class to reset the animation
    img1.classList.remove("roll");
    img2.classList.remove("roll");

    // Force a reflow to ensure the class is removed before re-adding it
    void img1.offsetWidth;
    void img2.offsetWidth;

    // Add the "roll" class to initiate the rolling animation
    img1.classList.add("roll");
    img2.classList.add("roll");

    // Wait for the rolling animation to finish
    setTimeout(function () {
        // Remove the "roll" class to stop the animation
        img1.classList.remove("roll");
        img2.classList.remove("roll");

        // Assign new image to img1 and img2 based on the random numbers
        img1.setAttribute("src", diceImages[randomNumber1 - 1]);
        img2.setAttribute("src", diceImages[randomNumber2 - 1]);

        // Update the h1 tag depending on which player won
        if (randomNumber1 > randomNumber2) {
            heading.textContent = "Player 1 Won!";
        } else if (randomNumber1 < randomNumber2) {
            heading.textContent = "Player 2 Won!";
        } else {
            heading.textContent = "It is a tie!";
        }
    }, 1000); // Adjust the timeout value to match the duration of the rolling animation
}


// Function to generate a random number between 1 and 6
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}


var viewportWidth = window.innerWidth;
console.log(viewportWidth);
