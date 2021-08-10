let readlineSync = require('readline-sync');

const chalk = require('chalk');

let userName = readlineSync.question("Enter your name: ");

let score = 0;

const highScore = 7;

const blue = chalk.blue;

const yellow = chalk.yellow;

let questions = [
  {
    question: "\n(1/5) Which team won the FIFA World Cup 2006? \n (a) France\n (b) Italy\n (c) Brazil\nYour answer: ",
    answer: "Italy"
  },
  {
    question: "(2/5) Which player holds the record of most goals in a calender year?\n (a) Messi\n (b) Ronaldo\n (c) Muller \nYour answer: ",
    answer: "Messi"
  },
  {
    question: "(3/5) Which player scored the fastest hatrick in Premier League? \n (a) Ronaldo\n (b) Aguero\n (c) Mane\nYour answer: ",
    answer: "Mane"
  },
  {
    question: "(4/5) Which team won the UCL 2009? \n (a) Barcelona\n (b) Manchester United\n (c) Inter Milan\nYour answer: ",
    answer: "Barcelona"
  },
  {
    question: "(5/5) Who won the first Premier League title? \n (a) Norwich City\n (b) Manchester United\n (c) Aston Villa\nYour answer:  ",
    answer: "Manchester United"
  }
];

let advanceQuestions = [
  {
    question: "\n(1/5) How many clubs competed in the inaugural Premier League season? \n (a) 22\n (b) 18\n (c) 20\nYour answer: ",
    answer: "22"
  },
  {
    question: "(2/5) Which country won the first ever World Cup in 1930?\n (a) Argentina\n (b) Brazil\n (c) Uruguay \nYour answer: ",
    answer: "Uruguay"
  },
  {
    question: "(3/5) Which outfield player appeared in the Champions League final in three different decades? \n (a) Wayne Rooney\n (b) Ryan Giggs\n (c) Gary Neville\nYour answer: ",
    answer: "Ryan Giggs"
  },
  {
    question: "(4/5) Which Spanish club's nickname is Los Colchoneros, which translates to English as 'The Mattress Makers'? \n (a) Sevilla\n (b) Valencia\n (c) Atletico Madrid\nYour answer: ",
    answer: "Atletico Madrid"
  },
  {
    question: "(5/5) WWhich club did Manchester United sign Anthony Martial from? \n (a) Marseille\n (b) Monaco\n (c) Lille\nYour answer:  ",
    answer: "Monaco"
  }
];

console.log(blue("\nWelcome " + userName + "! to play FOOTBALL QUIZ Beginner level..."));

function play(question, answer) {

  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Correct!"));
    score = score + 1;
  }
  else
    console.log(chalk.red("Wrong!"));
}

for (let i = 0; i < questions.length; i++) {
  
  let currentQuestion = questions[i];
  
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(yellow("\nYou Scored: "+ score + " out of 5 \n"));

if (score === 5){

  console.log(blue("Congratulations! You scored 5 out of 5 \nYou moved to advance level..."));

  for (let i = 0; i < advanceQuestions.length; i++) {
  
  let currentQuestion = advanceQuestions[i];
  
  play(currentQuestion.question, currentQuestion.answer);

}

  console.log(yellow("\nYou Scored: "+ score + " out of 10 \nHigh Score: 7"));

}
else
  console.log(blue("Score 5 out of 5 to play advance level"));

if(score > highScore)
  console.log(blue("\nCongratulations! You beat the high score!!!"))
  