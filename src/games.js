const input = require("readline-sync");

// taking first player infoamtion
let name1=input.question("enter first player name");
let num1=Number(input.question("enter our number"));

// taking second player infoamtion
let name2=input.question("enter second player name");
let num2=Number(input.question("enter our number"));

while(true){
// Guessing logic
// player one gurssing
let guess = Number(input.question('player one guess the nuber'));
if(guess===num2)
{
    console.log("player one is winner");
    break;
}
else if(guess<num2){
    console.log("hint:Higher");
}else{
    console.log("hint:Lower");
}
// player 2 guessing
guess = Number(input.question('player two guess the nuber'));
if(guess===num1)
{
    console.log("player two is winner");
    break;
}
else if(guess<num1){
    console.log("hint:Higher");
}else{
    console.log("hint:Lower");
}
}