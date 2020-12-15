const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score=0;
var log=console.log;

var userName = readlineSync.question(chalk.bgRed(`Hey! What's your name?
`));

log(chalk.bgCyan(`
Welcome to the quiz game ${userName} :)`));
log(chalk.bgWhite.black.bold(`
For each correct answer, you'll recieve 1 point.
So, here you go (^o^)`));




function quiz(question, answer){
  var userAnswer = readlineSync.question(chalk.yellow(question));
  if(answer.toUpperCase() === userAnswer.toUpperCase()){
    log(chalk.green.bold(`\nYeah! You're correct :)`));
    score++
  }else{
    log(chalk.red.bold(`\nOops! That's incorrect :(`));
  }
  log(chalk.bgRed.black.bold(`\nYour current score is ${score} !\n`)+
`\n---------------------------------------------`);
}

//array

var questions = [
{
  question: `
1. Which is the largest living bird on Earth?
   a. Emu
   b. Ostrich
   c. Albatross
   d. Siberian Crane`+
chalk.blueBright.bold(`
Answer = `),
  answer: "b"
},
{
  question: `
2. Which amongst the following is the largest mammal?
   a. Elephant
   b. Whale
   c. Dinosaur
   d. Rhinocero`+
chalk.blueBright.bold(`
Answer = `),
  answer: "b"
},
{
  question: `
3. Which one among the following lays eggs and does not produce young ones directly?
   a. Echidna
   b. Kangaroo
   c. Porcupine
   d. Whale`+
chalk.blueBright.bold(`
Answer = `),
  answer: "a"
},
{
  question: `
4. Pashmina shawl is made from the hair of :
   a. Sheep
   b. Rabbit
   c. Goat
   d. Yak`+
chalk.blueBright.bold(`
Answer = `),
  answer: "c"
},
{
  question: `
5. In what country would you find the world's northernmost wild monkey population?
   a. India
   b. United States 
   c. Spain
   d. Japan `+
chalk.blueBright(`
Answer = `),
  answer: "d"
}];



for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}


log(chalk.bold.cyan`                 GAME ENDED`+ 
chalk.magentaBright.bold`\n               YOUR SCORE : ` + score);