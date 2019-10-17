$(document).ready(function() {

// Questions 
let questionOne = {
prompt: "In 1991, this bands debut album unseated “The King of Pop”, Michael Jackson from the No. 1 position on the Billboard 200.",
options: ["<div class='text-center btn btn-info btn-block' data-correct='false'>Soundgarden</div>",  
"<div class='text-center btn btn-info btn-block' data-correct='true'>Nirvana</div>",
"<div class='text-center btn btn-info btn-block' data-correct='false'>The Smashing Pumpkins</div>", 
"<div class='text-center btn btn-info btn-block' data-correct='false'>Red Hot Chili Peppers</div>",  
"<div class='text-center btn btn-info btn-block' data-correct='false'>Pearl Jam</div>",] 
}
let questionTwo = {
prompt: "Although this English act formed in the late 70’s, they didn’t have a top ten US hit until their 1989 album, Disintegration.",
options: ["<div class='text-center btn btn-info btn-block' data-correct='false'>Depeche Mode</div>", 
"<div class='text-center btn btn-info btn-block' data-correct='true'>The Cure</div>",
"<div class='text-center btn btn-info btn-block' data-correct='false'>Joy Division</div>",
"<div class='text-center btn btn-info btn-block' data-correct='false'>New Order</div>", 
"<div class='text-center btn btn-info btn-block' data-correct='false'>Siouxsie and the Banshees</div>",]
}
let questionThree = {
    prompt: "One of the first 90’s alternative acts, this American act experienced commercial success throughout the entire decade. Their first album was called “Gish”.",
    options: ["<div class='text-center btn btn-info btn-block' data-correct='false'>Alice in Chains</div>", 
    "<div class='text-center btn btn-info btn-block' data-correct='true'>The Smashing Pumpkins</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Pearl Jam</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Weezer</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Stone Temple Pilots</div>",]
}
let questionFour = {
    prompt: "Though not exaclty an Alternative act, this band had a big influence on many 90’s alternative and indie bands. Their biggest international hit was not sung by the lead singer, but rather the bassist.",
    options: ["<div class='text-center btn btn-info btn-block' data-correct='true'>The Cars</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Cheap Trick</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Devo</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Aerosmith</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>The Ramones</div>",]
}
let questionFive = {
    prompt: "Though not their biggest hit, this bands only MTV Video Music Award was for Best Group Video in 1987 for their song Wild Wild Life?",
    options: ["<div class='text-center btn btn-info btn-block' data-correct='false'>The Cocteau Twins</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Television</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Roxy Music</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='true'>Talking Headsh</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Tom Tom Club</div>",]
}
let questionSix = {
    prompt: "Kurt Cobain admitted to basically copying the loud - soft dynamic that Black Francis and crew had perfected years before Smells Like Teen Spirit was a monster hit. Which influential early alternative band was he referring to?",
    options: ["<div class='text-center btn btn-info btn-block' data-correct='false'> The Velvet Underground</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='true'>The Pixies</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Sonic Youth</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Husker Du</div>",
    "<div class='text-center btn btn-info btn-block' data-correct='false'>Black Flag</div>",]
    
}
// Variables Outside Jquery start
let allQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
let questLength = allQuestions.length;
let nextQuest = 0;
let right = 0;
let wrong = 0;
let unanswered = 0;
let countDown = 12;
let intervalId;

// Start The Game //
$(".st-btn").click(function() {
    $(".st-btn").remove();
    showQuestions(AllQuestions[nextQuest]);
    $("#questions").css('display', 'inherit');
    
});

    // function showQuestions = 
// Game Starts
// Timer 
{
    let secs = 0;
    let id = setInterval(function(){ 
        secs++; //console.log(secs);
      if(secs> 10){
        clearInterval(id);
        alert('You' + '\'re' + ' out of time!');
       }
    }, 1000);
}
// //Functions
// function correct() {
//     let rightAnswer = $(this).data("correct");
// if (rightAnswer === true)

// }


// Pseudo Code ...

// Make random question popup
// 5 possible answers for question
// Answers are logged into Right, Wrong, Unanswered as the game proceeds
// After all questions are asked, the "total-screen" appears where the player sees how they did, and are given an option to restart.
});