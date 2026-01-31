let boxes = document.querySelectorAll(".box");
let reset_btn  = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

let winPatterns  = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let winLine = document.querySelector(".win-line");

const lineStyles = {
  "0,1,2": { top: "16%", left: "50%", rotate: "0deg" },
  "3,4,5": { top: "50%", left: "50%", rotate: "0deg" },
  "6,7,8": { top: "84%", left: "50%", rotate: "0deg" },

  "0,3,6": { top: "50%", left: "16%", rotate: "90deg" },
  "1,4,7": { top: "50%", left: "50%", rotate: "90deg" },
  "2,5,8": { top: "50%", left: "84%", rotate: "90deg" },

  "0,4,8": { top: "50%", left: "50%", rotate: "45deg" },
  "2,4,6": { top: "50%", left: "50%", rotate: "-45deg" }
};

const drawWinLine = (pattern) => {
  let key = pattern.join(",");
  let style = lineStyles[key];

  winLine.style.top = style.top;
  winLine.style.left = style.left;
  winLine.style.transform = `translate(-50%, -50%) rotate(${style.rotate})`;
  winLine.style.width = "80%";
};


    boxes.forEach((box)=>
    {
        box.addEventListener("click",()=>
        {
            console.log("Button was clicked")
            if(turnO)
            {
                box.classList.add("textO")
                box.innerText = "O"
                turnO = false
                box.classList.remove("textX")

            }
            else
            {
                box.classList.add("textX")
                box.innerText = "X"
                turnO = true 
                 box.classList.remove("textO")
            }
            box.disabled = true;

            checkwinner();

        });
    });


const checkwinner = ()=>
{
    for(let patterns of winPatterns)
    {

        // console.log(patterns[0],patterns[1],patterns[2])
        // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]])
    let pos1val = boxes[patterns[0]].innerText;
    let pos2val = boxes[patterns[1]].innerText;
    let pos3val = boxes[patterns[2]].innerText;
    console.log("[",pos1val , pos2val , pos3val,"]",patterns,"Stop for")

    if(pos1val !="" && pos2val != "" && pos3val !="")
    {
        console.log("[",pos1val , pos2val , pos3val,"]",winPatterns,"Stop first if")
        if(pos1val === pos2val && pos2val === pos3val)
        {
            console.log("Winner")
            showWinner(pos1val)
            drawWinLine(patterns);

            
        }
    }
    }
};

const showWinner = (Winner)=>
{
    msg.innerText=`Congratulations , Winner is ' ${Winner} '`;
    msgContainer.classList.remove("hide")
    disableBox();
}

const disableBox= () =>
{
    for(let box of boxes)
    {
        box.disabled=true
    }
    
}

let resetBox = ()=>
{
    turnO =true
    EnableBox();
    msgContainer.classList.add("hide");
    winLine.style.width = "0";

}

const EnableBox=() =>
{
    for(let box of boxes)
    {
        box.innerText=""
        box.disabled=false
    }
}


reset_btn.addEventListener("click" ,resetBox);

newGameBtn.addEventListener("click",resetBox);




