// for(let i=1;i<=15;i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }
// for(let i=1;i<=15;i+=2){
//     console.log(i);
// }
// for(let i=1;i<=10;i++){
//     console.log(`5*${i} = ${5*i}`);
// }
//movie-guessing game
// const favMovie="KGF";
// let guess=prompt("Guess the movie");
// while(guess!=favMovie&&guess!='quit'){
//     console.log("You are wrong!!Try again");
//     guess=prompt("Guess the movie");
// }
// if(guess==favMovie){
//     console.log("You won");
// }
// else{
//     console.log("Better luck next time");
// }
//To-do list
 let to_do=[];
 let req=prompt("Enter your request!!");
 while(true){
     if(req=='quit'){
         console.log("Thanks for using this app,See ya!!");
         break;
     }
     else if(req=='list'){
         console.log("-----**-----");
         for(val of to_do){
             console.log(val);
         }
         console.log("-----**-----");
    }
      else if(req=='add'){
         let ad=prompt("Enter your task to be added");
         to_do.push(ad);
         console.log("Task added");
     }
     else if(req=='delete'){
         let item=prompt("Enter the item to be deleted");
         let idx=to_do.indexOf(item);
         to_do.splice(idx,1);
         console.log("Task deleted")
     }
    else{
         console.log("Invalid input")
    }
     req=prompt("Enter your request!!");
 }
