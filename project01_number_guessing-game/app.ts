import inquirer from "inquirer";
import chalk from "chalk";

const randomNum = Math.floor(Math.random() * 10);

console.log(chalk.bgRed("Number Guessing Game"));

async function guessGame() {
  const guess: { userGuess: number } = await inquirer.prompt([
    {
      type: "number",
      name: "userGuess",
      message: "Enter your guess from 1 to 10",
    },
  ]);

  const { userGuess } = guess;

  console.log("Your Guess:", userGuess, "Guess:", randomNum,);
  if (userGuess == randomNum) {
    console.log("Hurry!! Your Guess is Correct");
  } else {
    console.log("Please try again");
  }
}
guessGame();