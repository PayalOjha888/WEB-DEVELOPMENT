let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".winner-container");
let msgPara = document.querySelector("#msg");
let newGameButton = document.querySelector("#new-btn");
let boxes = document.querySelectorAll(".box");
let draw=document.querySelector("#draw-msg");
let drawContainer=document.querySelector(".draw-container");
let restart = document.querySelector("#restart");

alert("This is a Tic-Tac-Toe Game, Start with player who have choosen O!");
//playerX & playerO


let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]];

const resetGame = () => {
    count=0;
    turnO = true;
    enableBoxes();
     msgContainer.classList.add("hide");
    drawContainer.classList.add("hide");
};



const checkDraw=()=>{
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
            if((pos1!=pos2) || (pos2!=pos3)|| (pos3!=pos1)){ 
            draw.innerText="OOPS! Match has drawn";
            drawContainer.classList.remove("hide");
            disableBoxes();
            }
        
    }
};


let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";  
            box.style.color="green";      
            turnO = false;
            count++;
        }
        else {
            box.innerText = "X";
            box.style.color="red";
            turnO = true;
            count++;
        }
        box.disabled = true;
        checkWinner();
        if(count==9)
            {
        checkDraw();
          }
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msgPara.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1);
            }
        }
    }
};

reset.addEventListener("click", resetGame);
newGameButton.addEventListener("click", resetGame);
restart.addEventListener("click",resetGame);