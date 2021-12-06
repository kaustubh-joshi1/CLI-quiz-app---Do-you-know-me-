var readlineSync = require("readline-sync");
const chalk = require('chalk');
const log = console.log;

var score = 0;

// data of high score
var highScores = [
  {
    name: "Kaustubh",
    score: 3,
  },

  {
    name: "Yogesh",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "What is my dream job? ",
  answer: "Software developer"
},
{
  question: "What's something that always cheers me up when I'm sad? ",
  answer: "Ice Cream"
},
{
  question: "What is my favorite sport? ",
  answer: "Cricket"
},
{
  question: "Where do I live? ",
  answer: "Pune"
}, {
  question: "My favorite superhero would be? ",
  answer: "Iron man"
}];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}



function welcome() {
 var userName = readlineSync.question("What's your name? ");
 const userCaps = userName.split(' ').map(capitalize).join(' ');
 log(chalk `{blue ${userCaps}}` + ' Welcome to' + chalk.blue(' DO YOU KNOW Kaustubh?'));
console.log('Instructions: ');
console.log('1. There are 5 questions in all');
console.log('2. And there are 3 levels in the quiz. Each level has 2 questions.');
console.log('3.To go to next level, you need to answer at least one question correctly.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
}



// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    log(chalk.green("Right!"));
    score = score + 1;
    
  } else {
    log(chalk.red("Wrong!"));
   
  }

  log(chalk`Current score: {blue ${score}}`);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  log(chalk`You SCORED: {blue ${score}}`);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(user => log(chalk` {blue ${user.name} : ${user.score}}`))

}


welcome();
game();
showScores();