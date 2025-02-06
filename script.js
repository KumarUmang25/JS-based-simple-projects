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
