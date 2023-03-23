import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.redBright("Word Counter"));

const wordCounter: { words: string } = await inquirer.prompt([
  {
    name: "sentneces",
    type: "input",
    message: "Enter paragraph to count words:",
  },
]);

const word = wordCounter.words.trim();
const result = word.split(" ");

console.log(`Your Word Count is ${result.length}`);
