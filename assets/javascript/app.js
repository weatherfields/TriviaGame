$(document).ready(function() {

// Questions 
const questions=[{
    name:"questionOne",
    prompt: "In 1991, this bands debut album unseated “The King of Pop”, Michael Jackson from the No. 1 position on the Billboard 200.",
    ansOptions: ["Soundgarden",  
    "The Smashing Pumpkins", 
    "Red Hot Chili Peppers",  
    "Pearl Jam", "Nirvana"],
    right: "Nirvana",
},
{
    name:"questionTwo",
    prompt: "Although this English act formed in the late 70’s, they didn’t have a top ten US hit until their 1989 album, Disintegration.",
    ansOptions: ["Depeche Mode", 
    "Joy Division",
    "New Order", 
    "Siouxsie and the Banshees", "The Cure"],
    right:"The Cure"
},
{   
    name:"questionThree",
    prompt: "One of the first 90’s alternative acts, this American act experienced commercial success throughout the entire decade. Their first album was called “Gish”.",
    ansOptions: ["Alice in Chains", 
    "Pearl Jam",
    "Weezer",
    "Stone Temple Pilots"],
    right: "The Smashing Pumpkins"
},
{   name:"questionFour",
    prompt: "Though not exactly an Alternative act, this band had a big influence on many 90’s alternative and indie bands. Their biggest international hit was not sung by the lead singer, but rather the bassist.",
    ansOptions: ["The Cars",
    "Cheap Trick",
    "Devo",
    "Aerosmith",
    "The Ramones"],
    right: "The Cars"
},
{   name:"questionFive",
    prompt: "Though not their biggest hit, this bands only MTV Video Music Award was for Best Group Video in 1987 for their song Wild Wild Life?",
    ansOptions: ["The Cocteau Twins",
    "Television",
    "Roxy Music",
    "Talking Heads",
    "Tom Tom Club"],
    right: "Talking Heads"
},
{   
    name:"questionSix",
    prompt: "Kurt Cobain admitted to basically copying the loud - soft dynamic that Black Francis and crew had perfected years before Smells Like Teen Spirit was a monster hit. Which influential early alternative band was he referring to?",
    ansOptions: [
    "The Velvet Underground",
    "The Pixies",
    "Sonic Youth",
    "Husker Du",
    "Black Flag"],
    right: "The Pixies"  
}]

//render question on page dynamically


function showQuestions(){

    var rando = Math.floor(Math.random() * 5 + 1)
    
    var questionContainer = $('#questions');
    var questionDiv = $('<div>');
    questionDiv.attr('id', questions[rando].name);
   
    questionDiv.text(questions[rando].prompt);
    // questionDiv.css('border','solid 2px red');
    // questionDiv.css('display','block');
    // questionDiv.css('box-sizing','border-box');
    // questionDiv.css('height','100px');
    questionContainer.append(questionDiv);


    /*let answerDiv = $('<div>');
    answerDiv.text(question.right);
    answerDiv.css('border','solid 2px blue');
    answerDiv.css('display','block');
    answerDiv.css('box-sizing','border-box');
    answerDiv.css('height','50px');
    answerDiv.attr('data-correct','true');*/


    // var wrongAnswers= question[i].wrong;

    // for(var j =0 ; j < wrongAnswers.length; j++) {
       
    // let answerDiv = $('<div>');
    //     answerDiv.text(wrongAnswers[j]);
    //     answerDiv.css('border','solid 2px blue');
    //     answerDiv.css('display','block');
    //     answerDiv.css('box-sizing','border-box');
    //     answerDiv.css('height','50px');
    //     answerDiv.attr('data-correct','false');



    //     questionContainer.append(answerDiv);


    // }


}
// Start The Game //
$(".st-btn").click(function() {
    $(".st-btn").remove();
    showQuestions();
    //$("#questions").css('display', 'inherit');
    startTimer();
    
    function startTimer() {
        
        var timer = 12;
        var id = setInterval(function(){ 
            $("#printedtimer").text("Time remaining: " + timer + " seconds");
            timer--; //console.log(secs);
            if(timer === 0){
            clearInterval(id);
            alert('You' + '\'re' + ' out of time!');
           }
        }, 1000);
    }
        // if (secs < 0) {
        //     clearInterval(id);
        //     document.getElementById("#printedtimer").innerHTML = "You're Out Of Time!";
        //   }
        // }
        //DOM manipulation code to throw secs on screen would probably go here

});
});




















// Variables Outside Jquery start
/*let allQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];
let questLength = allQuestions.length;
let nextQuest = 0;
let right = 0;
let wrong = 0;
let unanswered = 0;
let countDown = 12;
let intervalId;*/

    // function showQuestions = 
// Game Starts
// Timer 

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
