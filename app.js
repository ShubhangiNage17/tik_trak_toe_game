let boxes = document.querySelectorAll(".box");
let reset_button=document.querySelector("resetbutton");
let turnO=true;   //playerX,playerY
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");


// let arr1=["apple","bannana"];//1Dimension array

// let arr2D=[["apple","bannana"],["patato", "mashrrom"],["pants","shitrs"]];//2Dumensional array

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]

];
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enabeBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "" ;
    }
};
const resetGame =() => {
    turnO = true;
    enabeBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
     if(turnO){
         box.innerText="o"; //playerO turn
        turnO=false;
     }
     else{
        box.innerText="x"; //playerX
        turnO=true;
     }
     box.disabled =true;

     checkWinner();
    });

});
const showWinner = (winner) => {
    msg.innerText=`Congratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
    for(let pattern of winpatterns){
      
     let pos1Val = boxes[pattern[0]].innerText;
     let pos2Val = boxes[pattern[1]].innerText;
     let pos3Val = boxes[pattern[2]].innerText;
             //pattern is array here
      if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
        }
      }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetbutton.addEventListener("click",resetGame);
