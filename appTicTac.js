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



    boxes.forEach((box)=>
    {
        box.addEventListener("click",()=>
        {
            console.log("Button was clicked")
            if(turnO)
            {
                box.innerText = "O"
                turnO = false
            }
            else
            {
                box.innerText = "X"
                turnO = true 
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

    if(pos1val !="" && pos2val != "" && pos3val !="")
    {
        if(pos1val === pos2val && pos2val === pos3val)
        {
            console.log("Winner")
            showWinner(pos1val)
            
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




