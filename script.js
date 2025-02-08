//Guessing game
console.log("*******");
console.log("**SET**");
console.log("*YOURR*");
console.log("*RANGE*");
console.log("*******");
const max=prompt("Enter the maximum value");
const num=Math.floor(Math.random()*max)+1;
let guess=prompt("Enter your guess");
while(guess!=num){
    if(guess=='Quit'){
        break;
    }
    else if(guess>num){
        guess=prompt("HINT:You're close!!Please choose a SMALLER number");
    }
    else if(guess<num){
        guess=prompt("HINT:You're close!!Please choose a LARGER number");
    }
}   
if(guess=='Quit'){
    console.log("You are a loser.Just DIEE!! already")
}
else{
    console.log("Oh you won,That was just luck,Nothing Extraordinary");
}