let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
let lname=document.getElementById("lname").value;
let age=document.getElementById("age").value;

greetParagraph.innerHTML = "Greetings " + age + " year old " 
+ fname + " " + lname; 

}

function trivia1() {
    let triviaAnswer= document.getElementById("trivia1-answer");

    let chocolateSelected=document.getElementById("chocolate").checked;
    let tunaSelected=document.getElementById("tuna").checked;
    let honeySelected=document.getElementById("honey").checked;

    if(chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth?"
    }
    else if(tunaSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong. Yuck!"
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!"
    }
}

function answer1() {
    let answerAnswer=document.getElementById("truth-answer");
    
    let dogselected=document.getElementById("dog").checked;
    let colorselected=document.getElementById("color").checked;
    let birthdayselected=document.getElementById("birthday").checked;

    if (birthdayselected) {
        answerAnswer.innerHTML = fname + ",you are correct!"
    }
    else if (colorselected) {
        answerAnswer.innerHTML = fname + ", you are incorrect."
    }
    else if (dogselected) {
        answerAnswer.innerHTML = fname + ", you are incorrect."
    }
}
