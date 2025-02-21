//accessing Event
let btn=document.querySelector('button');
let list=document.querySelector('ul');
let inp=document.querySelector("input");
let del=document.querySelectorAll(".del");

//adding a task
btn.addEventListener("click",function(){
    let task=document.createElement('li');
    task.innerText=inp.value;
    list.appendChild(task);
    
    let delBtn=document.createElement('button');
    delBtn.innerText="delete";
    delBtn.classList.add("del");
    task.appendChild(delBtn);
    inp.value="";
});

list.addEventListener("click",function(event){
    console.log(event.target.nodeName=="BUTTON");
    let par=event.target.parentElement;
    par.remove();
});

//deleting a task
// let delBtns=document.querySelectorAll(".del");
// for(btn of delBtns){
//     btn.addEventListener("click",function(){
//         this.parentElement.remove();
//     });
// }

//*AN EVENT LISTENER DOES NOT WORK FOR THE NEWLY FORMED ELEMENTS..THAT IS WHY WE NEED EVENT DELEGATION*