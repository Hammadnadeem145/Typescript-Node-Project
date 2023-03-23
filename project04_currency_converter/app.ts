import inquirer from "inquirer";
import chalk from "chalk";

const currency = {
  PKR: {
    USD: 283.02,
    PKR: 1,
    EUR: 306.67,
  },
  USD: {
    USD: 1,
    PKR: 283.02,
    EUR: 0.92,
  },
  EUR: {
    USD: 1.08,
    PKR: 306.65,
    EUR: 1,
  },
};

console.log(chalk.rgb(123, 45, 67).underline('Money Exchange!'));

const currencyMaker: {
    CURRENCY: "PKR" | "USD" | "EUR";
    CONVERTOR: "PKR" | "USD" | "EUR";
AMOUNT: number; 
} = await inquirer.prompt([{
    type: "list",
    name: "CURRENCY",
    choices: ["PKR", "USD", "EUR"],
    message: "Select your Currency",
},
{
    type: "list",
    name: "CONVERTOR",
    choices: ["PKR", "USD", "EUR"],
    message: "Which Currency u want",
  },
  {
    type: "number",
    name: "AMOUNT",
    message: "Enter your Converting amount",
  },
]);

const { CURRENCY, CONVERTOR, AMOUNT } = currencyMaker;
if(CURRENCY && CONVERTOR && AMOUNT) {
    let amount = currency[CURRENCY][CONVERTOR] * AMOUNT;
    console.log(`Your converting from ${CURRENCY} to ${CONVERTOR} is ${amount} `);

} else {
    console.log("Invalid Info");
}

