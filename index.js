// Generating a randome number on Dice1
var randomNumber1 = Math.floor(Math.random()*6)+1;
// var randDice1 = "dice" + randomNumber1.toString(10);
var randDice1 = "dice" + randomNumber1;
document.getElementsByClassName("img1")[0].setAttribute("src","images/"+randDice1+".png");


// Generating a randome number on Dice2
var randomNumber2 = Math.floor(Math.random()*6)+1;
// var randDice1 = "dice" + randomNumber1.toString(10);
var randDice2 = "dice" + randomNumber2;
document.getElementsByClassName("img2")[0].setAttribute("src","images/"+randDice2+".png");

//Player 1 wins
if(randomNumber1>randomNumber2) {
  document.querySelector("h2").innerHTML = "Player 1 wins !";
}

//Player 2 wins
else if(randomNumber1<randomNumber2){
  document.querySelector("h2").innerHTML = "Player 2 wins ! ";
}

//Draw
else{
  document.querySelector("h2").innerHTML = "Draw !";
}
