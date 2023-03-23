"use strict";
// import inquirer from "inquirer";
// import chalk from "chalk";
Object.defineProperty(exports, "__esModule", { value: true });
const account = {
    balance: 1000000000,
};
function checkBalance() {
    console.log(`Your current balance is $${account.balance}`);
}
function withdraw(amount) {
    if (amount > account.balance) {
        console.log("Insufficient funds");
    }
    else {
        account.balance -= amount;
        console.log(`You have withdrawn $${amount}. Your new balance is $${account.balance}`);
    }
}
function deposit(amount) {
    account.balance += amount;
    console.log(`You have deposited $${amount}. Your new balance is $${account.balance}`);
}
function main() {
    console.log("Welcome to the ATM!");
    console.log("What would you like to do?");
    console.log("1. Check Balance");
    console.log("2. Withdraw");
    console.log("3. Deposit");
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readline.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case "1":
                checkBalance();
                break;
            case "2":
                readline.question("Enter amount to withdraw: ", (amount) => {
                    withdraw(parseInt(amount));
                    readline.close();
                });
                break;
            case "3":
                readline.question("Enter amount to deposit: ", (amount) => {
                    deposit(parseInt(amount));
                    readline.close();
                });
                break;
            default:
                console.log("Invalid choice");
                readline.close();
                break;
        }
    });
}
main();
