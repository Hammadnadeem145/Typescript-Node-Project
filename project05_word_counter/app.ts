import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.redBright("Word Counter"));

const wordCounter: { sentences: string } = await inquirer.prompt([
  {
    name: "sentneces",
    type: "input",
    message: "Enter paragraph to count words:",
  },
]);

const words = wordCounter.sentences.trim();
const result = words.split(" ");

console.log(`Your Word Count is ${result.length}`);
