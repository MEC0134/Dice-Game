// Create a random number variable to represent the players dice 
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);


// Create a variable for each image file 
var img1 = "images/dice1.png";
var img2 = "images/dice2.png";
var img3 = "images/dice3.png";
var img4 = "images/dice4.png";
var img5 = "images/dice5.png";
var img6 = "images/dice6.png";


// Assign new image to the img1 depending on the number we get from randomNumber1 variable

switch(randomNumber1) 
{
    case 1:
        document.querySelector(".img1").setAttribute("src", img1);
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", img2);
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", img3);
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", img4);
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", img5);
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", img6);
        break;
}

// Assign new image to the img1 depending on the number we get from randomNumber2 variable

switch(randomNumber2) 
{
    case 1:
        document.querySelector(".img2").setAttribute("src", img1);
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", img2);
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", img3);
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", img4);
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", img5);
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", img6);
        break;
}



// Update the h1 tag depending on which player won

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent = "Player 1 Won!";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").textContent = "Player 2 Won!";
}
else
{
    document.querySelector("h1").textContent = "It is a tie!";
}
