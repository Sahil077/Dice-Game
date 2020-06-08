var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceImage = "Dice" + randomNumber1 + ".png";
var randomImagesource = "images/" + randomDiceImage ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" ,randomImagesource );

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceImage1 = "Dice" + randomNumber2 + ".png";
var randomImagesource1 = "images/" + randomDiceImage1 ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" ,randomImagesource1 );


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML="Draw!";
}
else {
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
