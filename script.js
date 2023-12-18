    
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let send = document.getElementById("send");

    let err = document.getElementById("error-message");

    let firstPage = document.getElementById("firstPage");

    let secondPage = document.getElementById("secondPage");

    let score = document.getElementById("score");

    let vote = 0;;



/*Hover*/

one.addEventListener("mouseover", function(){
    if(vote != 1){
        one.style.backgroundColor = "hsl(217, 12%, 63%)";
    }
    
    one.style.cursor = "pointer";
    
})
    
two.addEventListener("mouseover", function(){
    if(vote != 2){
        two.style.backgroundColor = "hsl(217, 12%, 63%)";
    }
    
    two.style.cursor = "pointer";
    
})
    
three.addEventListener("mouseover", function(){
    if(vote != 3){
        three.style.backgroundColor = "hsl(217, 12%, 63%)";
    }

    three.style.cursor = "pointer";
    
})
    
four.addEventListener("mouseover", function(){
    if(vote != 4){
        four.style.backgroundColor = "hsl(217, 12%, 63%)";
    }

    four.style.cursor = "pointer";    
    
})
    
five.addEventListener("mouseover", function(){
    if(vote != 5){
        five.style.backgroundColor = "hsl(217, 12%, 63%)";
    }

    five.style.cursor = "pointer";    
    
})
    
send.addEventListener("mouseover", function(){
    send.style.backgroundColor = "hsl(0, 0%, 100%)";
    send.style.cursor = "pointer";
    send.style.color = "hsl(25, 97%, 53%)";
})


/*mouseout*/

one.addEventListener("mouseout", function(){
    if(vote != 1){
        one.style.backgroundColor = "var(--DarkBlue)";
    }
    
})
    
two.addEventListener("mouseout", function(){
    if(vote != 2){
        two.style.backgroundColor = "var(--DarkBlue)";
    }
    
})
    
three.addEventListener("mouseout", function(){
    if(vote != 3){
        three.style.backgroundColor = "var(--DarkBlue)";
    }
    
})
    
four.addEventListener("mouseout", function(){
    if(vote != 4){ 
        four.style.backgroundColor = "var(--DarkBlue)";
    }
    
})
    
five.addEventListener("mouseout", function(){
    if(vote != 5){
        five.style.backgroundColor = "var(--DarkBlue)";
    }
    
})

send.addEventListener("mouseout", function(){
    send.style.backgroundColor = "hsl(25, 97%, 53%)";
    send.style.cursor = "pointer";
    send.style.color = "hsl(0, 0%, 100%)";
})




/*Clicked*/

one.addEventListener("click", function(){
    vote = 1;
    one.style.backgroundColor = "var(--Orange)";
    UpdateColors();
    RemoveErr();
})
    
two.addEventListener("click", function(){
    vote = 2;
    two.style.backgroundColor = "var(--Orange)";
    UpdateColors();
    RemoveErr();
})
    
three.addEventListener("click", function(){
    vote = 3;
    three.style.backgroundColor = "var(--Orange)";
    UpdateColors();
    RemoveErr();
})
    
four.addEventListener("click", function(){
    vote = 4;
    four.style.backgroundColor = "var(--Orange)";
    UpdateColors();
    RemoveErr();
})
    
five.addEventListener("click", function(){
    vote = 5;
    five.style.backgroundColor = "var(--Orange)";
    UpdateColors();
    RemoveErr();
})

send.addEventListener("click", function(){
    if(vote == 0){
        err.classList.remove("none");
    }
    else{
        firstPage.style.display = "none";
        document.getElementById("score").innerHTML = `You selected ${vote} out of 5`;
        secondPage.classList.remove("none");
    }
})

function UpdateColors(){
    switch(vote){
        case 1:
            two.style.backgroundColor = "var(--DarkBlue)";
            three.style.backgroundColor = "var(--DarkBlue)";
            four.style.backgroundColor = "var(--DarkBlue)";
            five.style.backgroundColor = "var(--DarkBlue)";

            break;

        case 2:
            one.style.backgroundColor = "var(--DarkBlue)";
            three.style.backgroundColor = "var(--DarkBlue)";
            four.style.backgroundColor = "var(--DarkBlue)";
            five.style.backgroundColor = "var(--DarkBlue)";

            break;

        case 3:
            two.style.backgroundColor = "var(--DarkBlue)";
            one.style.backgroundColor = "var(--DarkBlue)";
            four.style.backgroundColor = "var(--DarkBlue)";
            five.style.backgroundColor = "var(--DarkBlue)";

            break;

        case 4:
            two.style.backgroundColor = "var(--DarkBlue)";
            three.style.backgroundColor = "var(--DarkBlue)";
            one.style.backgroundColor = "var(--DarkBlue)";
            five.style.backgroundColor = "var(--DarkBlue)";

            break;

        case 5:
            two.style.backgroundColor = "var(--DarkBlue)";
            three.style.backgroundColor = "var(--DarkBlue)";
            four.style.backgroundColor = "var(--DarkBlue)";
            one.style.backgroundColor = "var(--DarkBlue)";

            break;
    }
}

function RemoveErr(){
    err.classList.add("none");
}


