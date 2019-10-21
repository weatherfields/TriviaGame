// Pseudo Code ...
// Game opens to homescreen, with a start button and h1 header. When the start button is clicked, the game begins.
// Make sequential question popup via manipulation of HTML through JQuery
// 8 possible answers for question
// Answers are logged into Right, Wrong, Unanswered as the game proceeds
// After all questions are asked, the "total-screen" appears where the player sees how they did, and are given an option to restart. 
$(document).ready(function () {
// listeners
$("#start-btn").on('click', main.startGame);
$(document).on('click', '.option', main.checkThis);
$("#time-left").hide();
})
// Main, multidimensional array that the game is based around // 
let main = {
    timeLeft: 20,
    right: 0,
    wrong: 0,
    unanswered: 0,
    displayQuestion: 0,
    timerOn: false,
    timerDisplay: '',
// Questions / answers //
// https://stackoverflow.com/questions/9871634/javascript-array-inside-array-how-can-i-call-child-array-name
// That was my introduction to Object.keys
questions: {
        questonOne: 'In 1991, this bands debut album unseated "The King of Pop", Michael Jackson from the No. 1 position on the Billboard 200.',
        questionTwo: 'Although this English act formed in the late 70’s, they didn’t have a top ten US hit until their 1989 album, "Disintegration".',
        questionThree: 'One of the first 90’s alternative acts, this American act experienced commercial success throughout the entire decade. Their first album was called "Gish".',
        questionFour: 'Though not exactly an Alternative act, this band had a big influence on many 90’s alternative and indie bands. Their biggest international hit was not sung by the lead singer, but rather by the bassist.',
        questionFive: "Though not their biggest hit, this bands only MTV Video Music Award was for Best Group Video in 1987 for their song Wild Wild Life.",
        questionSix: 'Kurt Cobain admitted to basically copying the loud - soft dynamic that Black Francis and crew had perfected years before Smells Like Teen Spirit was a monster hit. Which influential early alternative band was he referring to?',
        questionSeven: "Very influential to this day, this English acts 1985 hit How Soon Is Now started as a b-side.",
        questionEight: "This widely succesful act broke into the mainstream with their song Creep (a song that the band themselves hate!) in 1992."
},
ansOptions: {
        questonOne: ['Soundgarden', 'The Smashing Pumpkins', 'Red Hot Chili Peppers', 'Pearl Jam', 'Nirvana'],
        questionTwo: ["Depeche Mode", "Joy Division", "New Order", "Siouxsie and the Banshees", "The Cure"],
        questionThree: ["Alice in Chains", "Pearl Jam", "Weezer", "Stone Temple Pilots", "The Smashing Pumpkins"],
        questionFour: ["The Cars", "Cheap Trick", "Devo", "Aerosmith", "The Ramones"],
        questionFive: ["The Cocteau Twins", "Television", "Roxy Music", "Talking Heads", "Tom Tom Club"],
        questionSix: ["The Velvet Underground", "The Pixies", "Sonic Youth", "Husker Du", "Black Flag"],
        questionSeven: ["The Smiths", "The Clash", "Echo & The Bunnymen", "Pet Shop Boys", "The The"],
        questionEight: ["Cold Play", "Stone Temple Pilots", "Radiohead", "Portishead", "Oasis"]
},
rightAns: {
        questonOne: 'Nirvana',
        questionTwo: 'The Cure',
        questionThree: 'The Smashing Pumpkins',
        questionFour: 'The Cars',
        questionFive: 'Talking Heads',
        questionSix: 'The Pixies',
        questionSeven: 'The Smiths',
        questionEight: 'Radiohead'
},
// Start game/clear out stuff/
startGame: function () {
        main.displayQuestion = 0;
        main.right = 0;
        main.wrong = 0;
        main.unanswered = 0;
        clearInterval(main.timerDisplay);
        $('#quesopts').show();
        $('#total').html('');
        $('#printedtimer').text(main.timeLeft);
        $('#start-btn').hide();
        $('#time-left').show();
        main.nextQuest();

},
// method to loop through and display quetsions //
nextQuest: function () {

 // set timer to 15 seconds each question
 main.timeLeft = 20;
    // $('#printedtimer').removeClass('last-seconds');
    $('#printedtimer').text(main.timeLeft);

    if (!main.timerOn) {
    main.timerDisplay = setInterval(main.timerRunning, 1000);
}

// gets all the querstions then indexes the current question
// Object constructor creates an object wrapper. Object.values returns an array containing the values that correspond to all of a given object's own enumerable string properties.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
        let questContent = Object.values(main.questions)[main.displayQuestion];
        $('#question').text(questContent);

// an array of all of the potential answers to the current question
        let questOptions = Object.values(main.ansOptions)[main.displayQuestion];

// the best way I can describe the .each generic iterator function is from this example in the Jquery Doc:
// If an object is used as the collection, the callback is passed a key-value pair each time:
// var obj = {
//   "flammable": "inflammable",
//   "duh": "no duh"
// };
// $.each( obj, function( key, value ) {
//   alert( key + ": " + value );
// });
// Once again, this produces two messages:

// flammable: inflammable
// duh: no duh
$.each(questOptions, function (index, key) {
    $('#ans-ops').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
})
},
// method to decrement counter and count unanswered if timer runs out
timerRunning: function () {
// still time left, still questions to ask. displayQuestion is less than Object.keys method.
// Object.keys method takes questions array and children and loops through length to figure out if questions remain
    if (main.timeLeft > -1 && main.displayQuestion < Object.keys(main.questions).length) {
        $('#printedtimer').text(main.timeLeft);
        main.timeLeft--;
}
// Use clearInterval() to stop the time:
// The timer has run out, then do something
// use setTimeout to display alert.
    else if (main.timeLeft === -1) {
        main.unanswered++;
        main.result = false;
        clearInterval(main.timerDisplay);
        resultId = setTimeout(main.guessResult, 2000);
        $('#total').html('<h3>Out of time! The answer was ' + Object.values(main.rightAns)[main.displayQuestion] + '</h3>');
}
// at end of questions, end game / show results
    else if (main.displayQuestion === Object.keys(main.questions).length) {

    // add all results of game to HTML, hide game, show start to begin again
    $('#total')
    .html('<h2>Here\'s Your Total:<p>Right: ' + main.right + '</p>' +
        '<p>Wrong: ' + main.wrong + '</p>' +
        '<p>Unanswered: ' + main.unanswered + '</p>' +
        '<h2>Thank You! Would You Like To Restart?</h2>');
        $('#quesopts').hide();
        $('#start-btn').show();
        }
},

checkThis: function () {
// timer ID for gameResult setTimeout
    let resultId;
// the current questions answer:
    let currentAnswer = Object.values(main.rightAns)[main.displayQuestion];
// if option picked is answer of current question (this), then add to correct:
        if ($(this).text() === currentAnswer) {
            // turn button green for correct
            $(this).addClass('btn-success').removeClass('btn-info');

            main.right++;
            clearInterval(main.timerDisplay);
            resultId = setTimeout(main.guessResult, 2000);
            $('#total').html('<h3>🥳 Congrats! You\'re Right! 🎉</h3>');
        }
// otherwise the answer is wrong, add to wrong:
        else {
            main.wrong++;
            clearInterval(main.timerDisplay);
            resultId = setTimeout(main.guessResult, 2000);
            $('#total').html('<h3>🙀 Sorry, the right answer was ' + currentAnswer + ' 🤯</h3>');
        }
    },
// method to remove old quest results / opts
    guessResult: function () {
        main.displayQuestion++;
        $('.option').remove();
        $('#total h3').remove();
// Move to next question
main.nextQuest();
}
}