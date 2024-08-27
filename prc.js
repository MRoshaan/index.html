console.log("This is Rock Paper scissor game:");
function getRandom(min, max) {
    var comval=Math.floor(Math.random() * ((max - min+1))) + min;
    var result;
    if (comval===1){
        result= "rock";
    }
    else if (comval===2){
        result="Paper";
    }
    else if (comval===3){
        result="scissor";
    }
    return {comval:comval ,result:result};

}
var personscr=0;
var comscr=0;

while (true){
    var compval=getRandom(1, 3); 
    console.log("Enter 1 for Rock ");
    console.log("Enter 2 for paper ");
    console.log("Enter 3 for scissor");
    var userinp=parseInt(prompt("Enter your option : "));
    if (userinp===compval.comval){
        console.log("It's a Draw Both choices are same : ",compval.result);
        console.log("PC score : ",comscr);
        console.log("Person Score : ",personscr);
    }
    else if (userinp===1 && compval.comval===3){
        console.log("Person wins with rock over scissor");
        personscr+=1;
        comscr+=0;
        console.log("PC score : ",comscr);
        console.log("Person Score : ",personscr);

    }
    else if (userinp===2 && compval.comval===1){
        console.log("Person wins with paper over rock ");
        personscr+=1;
        comscr+=0;
        console.log("PC score : ",comscr);
        console.log("Person Score : ",personscr);

    }
    else if (userinp===3 && compval.comval===2){
        console.log("Person wins with scissor over paper ");
        personscr+=1;
        comscr+=0;
        console.log("PC score : ",comscr);
        console.log("Person Score : ",personscr);

    }
    else if (userinp===3 && compval.comval===1){
        console.log("PC wins with Rock over scissor ");
        personscr+=0;
        comscr+=1;
        console.log("PC score : ",comscr);
        console.log("Person Score : ",personscr);

    }
    else if (userinp===1 && compval.comval===2){
        console.log("PC wins with paper over rock ");
        personscr+=0;
        comscr+=1;
        console.log("PC score : ",comscr);
        console.log("Person Score : ",personscr);

    }
    else if (userinp===2 && compval.comval===3){
        console.log("PC wins with scissor over paper ");
        personscr+=0;
        comscr+=1;
        console.log("PC score : ",comscr);
        console.log("Person Score : ",personscr);

    }
    else{
        console.log("please enter a valid number");
        continue;
    }
    var contan=prompt("Do you want to Continue the game if yes press any key if want to exit press 1 :");
    if (contan==="1"){
        break;

    }
    continue;
   
}
console.log("Game Over. Final Scores - Person: " + personscr + ", PC: " + comscr);
