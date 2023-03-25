import inquirer from "inquirer";
import chalk from "chalk";

interface ansType {
  userId: string;
  userPin: number;
  accountType: string;
  transactionType: string;
  amount: number;
}

console.log(chalk.yellowBright.underline("Islamic Bank ATM"));

async function Atm() {
  const answers: ansType = await inquirer.prompt([
    {
      type: "input",
      name: "userId",
      message: "Kindly Enter your Id: ",
    },
    {
      type: "number",
      name: "userPin",
      message: "Kindly Enter your PIN: ",
    },
    {
      type: "list",
      name: "accountType",
      choices: ["Current", "Saving"],
      message: "Select your account type:",
    },
    {
      type: "list",
      name: "transactionType",
      choices: ["Fast Cash", "Withdraw"],
      message: "Select your transaction",
      when(answers) {
        return answers.accountType;
      },
    },
    {
      type: "list",
      name: "amount",
      choices: [1000, 2000, 10000, 20000],
      message: "Select your amount",
      when(answers) {
        return answers.transactionType == "Fast Cash";
      },
    },
    {
      type: "number",
      name: "amount",
      message: "Enter your amount",
      when(answers) {
        return answers.transactionType == "Withdraw";
      },
    },
  ]);

  if (answers.userId && answers.userPin) {
    const balance = Math.floor(10000000);
    console.log("Your Balance was", balance);
    const enteredAmount = answers.amount;
    if (balance >= enteredAmount) {
      const remianing = balance - enteredAmount;
      console.log("Your remaining balance is", remianing);
    } else {
      console.log("Insuficient Balance");
    }
  }
}
Atm();









// type Account = {
//     balance: number;
//   };
  
//   const account: Account = {
//     balance: 1000000000,
//   };
  
//   function checkBalance() {
//     console.log(`Your current balance is $${account.balance}`);
//   }
  
//   function withdraw(amount: number) {
//     if (amount > account.balance) {
//       console.log("Insufficient funds");
//     } else {
//       account.balance -= amount;
//       console.log(`You have withdrawn $${amount}. Your new balance is $${account.balance}`);
//     }
//   }
  
//   function deposit(amount: number) {
//     account.balance += amount;
//     console.log(`You have deposited $${amount}. Your new balance is $${account.balance}`);
//   }
  
//   function Atm() {
//     console.log("Welcome to the ATM!");
//     console.log("What would you like to do?");
//     console.log("1. Check Balance");
//     console.log("2. Withdraw");
//     console.log("3. Deposit");
  
//     const readline = require("readline").createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
  
//     readline.question("Enter your choice: ", (choice: any) => {
//       switch (choice) {
//         case "1":
//           checkBalance();
//           break;
//         case "2":
//           readline.question("Enter amount to withdraw: ", (amount: string) => {
//             withdraw(parseInt(amount));
//             readline.close();
//           });
//           break;
//         case "3":
//           readline.question("Enter amount to deposit: ", (amount: string) => {
//             deposit(parseInt(amount));
//             readline.close();
//           });
//           break;
//         default:
//           console.log("Invalid choice");
//           readline.close();
//           break;
//       }
//     });
//   }
  
//   Atm();