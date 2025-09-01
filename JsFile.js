   let boxes=document.querySelectorAll(".box");
        let resetBtn=document.querySelector(".reset");

        let winAlert=document.querySelector(".winnerAlert");
        let turnO=true; //playerX , PlayerO
        let round=true;
        // document.getElementById("playerX").style.boxShadow="0px 0px 5px rgb(186, 188, 186)";
        // document.getElementById("playerX").style.backgroundColor="rgb(182, 148, 0)";
        roundO();
        const winningPattern=[
              [0,1,2],
              [0,3,6],
              [0,4,8],
              [1,4,7],
              [2,5,8],
              [2,4,6],
              [3,4,5],
              [6,7,8]
    ];
    
    function roundO(){
        if(round===true){
            document.getElementById("playerO").style.boxShadow="0px 0px 5px rgb(186, 188, 186)";
            document.getElementById("playerO").style.backgroundColor="rgb(182, 148, 0)";
            
        }
        else{
            document.getElementById("playerO").style.boxShadow="none";
            document.getElementById("playerO").style.backgroundColor="(101, 66, 1)";
        }
    }
    function roundX(){
        if(round===false){
            document.getElementById("playerX").style.boxShadow="0px 0px 5px rgb(186, 188, 186)";
            document.getElementById("playerX").style.backgroundColor="rgb(182, 148, 0)";
            roundO();
        }
        else{
            document.getElementById("playerX").style.boxShadow="none";
            document.getElementById("playerX").style.backgroundColor="(101, 66, 1)";
        }
    }
    boxes.forEach((box)=>{
        box.addEventListener('click', function(){
            // box.innerText="x";
            if(turnO===true){ //for player O
                box.innerText="O";
                round=false;
                roundX();
                roundO();
                turnO=false;
            }
            else{
                box.innerText="X";
                round=true;
                roundO();
                roundX();
                turnO=true;
            }
            box.disabled=true;
            checkWinner();

            boxes.forEach((box)=>{
              if(box.innerText!=="" && !checkWinner){
                console.log("game is tae");
              }
            });
        })
    });

    function disableBoxes(){
        boxes.forEach((box)=>{
            box.disabled=true;
        });
    }

    const checkWinner= ()=>{
        for(let i=0; i<winningPattern.length;i++){

            let pos1=boxes[winningPattern[i][0]].innerText;
            let pos2=boxes[winningPattern[i][1]].innerText;
            let pos3=boxes[winningPattern[i][2]].innerText;
            if(pos1!=="" && pos2!=="" && pos3!==""){
                if(pos1===pos2 && pos2===pos3){
                    document.getElementById("congtn").innerText=`Congratulaton! Player ${pos1} has won.`;
                    winAlert.style.display="flex";
                    resetBtn.removeEventListener('click',resetGame);
                    disableBoxes();
                }
            }   
        } 
    }

    document.getElementById("okBtn").addEventListener('click', function(){
        resetGame();
        resetBtn.addEventListener('click',resetGame);
        winAlert.style.display="none";
    });
   
    resetBtn.addEventListener('click',resetGame);

    function resetGame(){
        turnO=true;
        boxes.forEach((box)=>{
            box.disabled=false;
            box.innerText="";
            round=true;
            roundX();
            roundO();
        });

    }