import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bgCyanBright('WELCOME TO QUIZ GAME'));

const quizQuestions = [
    {
        type: "input",
        name: "capital of US",
        message: "What is capital of United States of America?",
        validate: (input: string) => input.toLowerCase() === "washington"

    },
    {
        type: "input",
        name: "capital of Pakistan",
        message: "What is the capital of Pakistan?",
        validate: (input: string) => input.toLowerCase() === "islamabad"
      },
      {
        type: "input",
        name: "capital of England",
        message: "What is the capital of England?",
        validate: (input: string) => input.toLowerCase() === "london"
      }
    ];


    const answer = await inquirer.prompt(quizQuestions);

    let score = 10;
    for (const key in answer) {
      if (answer[key] === true) {
        score++;
      }
    }
  
    console.log(`You got ${score} marks of ${quizQuestions.length} questions correct!`);