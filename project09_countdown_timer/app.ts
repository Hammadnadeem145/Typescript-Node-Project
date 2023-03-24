import chalk from "chalk";
import inquirer from "inquirer";
import { finished } from "stream";

console.log(chalk.bgBlueBright('COUNTDOWN TIMER'));

inquirer.prompt([
    {
        type: "input",
        name: "duration",
        message: "Enter the duration for the coutdown in seconds",
        validate: (input: string) => {
            const value = parseInt(input);
            if (!value || value <= 0) {
                return "Please enter duration greather than 0";
            }
            return true;
        },
    },
]).then((answer) => {
    const duration = parseInt(answer.duration);
    let count = duration;

    const interval = setInterval(() => {
        console.log(count);
        count--;
        if (count < 0) {
            clearInterval(interval);
            console.log("Countdown finished");
        }
    }, 1000)
});

