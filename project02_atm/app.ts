// import inquirer from "inquirer";
// import chalk from "chalk";

// interface userInfo {
//   userId: string;
//   userPin: Number;
//   accountType: string;
//   transactionType: string;
//   amount: number;
// }

// console.log(chalk.rgb(123, 45, 67).underline("Islamic Bank Atm"));

// async function Atm() {
//   const info: userInfo = await inquirer.prompt([
//     {
//       type: "input",
//       name: "userID",
//       message: "Please Enter your ID: ",
//     },
//     {
//       type: "number",
//       name: "userPin",
//       message: "Please Enter your PIN: ",
//     },
//     {
//       type: "list",
//       name: "accountType",
//       choices: ["Current", "Saving"],
//       message: "Select your account type: ",
//     },
//     {
//       type: "list",
//       name: "transactionType",
//       choices: ["Fast Cash", "Withdraw"],
//       message: "Select your Transaction: ",
//       when(info) {
//         return info.accountType;
//       },
//     },
//     {
//       type: "list",
//       name: "Amount",
//       choices: [1000, 3000, 10000, 20000],
//       message: "Select amount",
//       when(info) {
//         return info.transactionType == "Fash Cash";
//       },
//     },
//     {
//       type: "number",
//       name: "amount",
//       message: "Enter your Amount",
//       when(info) {
//         return info.transactionType == "Withdraw";
//       },
//     },
//   ]);

//   if (info.userId && info.userPin) {
//     const balance = Math.floor(Math.random() * 10000000000000);
//     console.log(balance);
//     const enteredAmount = info.amount;
//     if (balance >= enteredAmount) {
//       const remainingBalance = balance - enteredAmount;
//       console.log("Your remaining balance is", remainingBalance);
//     } else {
//       console.log("Insufficient Balance");
//     }
//   }
// }

// Atm();



type Account = {
    balance: number;
  };
  
  const account: Account = {
    balance: 1000000000,
  };
  
  function checkBalance() {
    console.log(`Your current balance is $${account.balance}`);
  }
  
  function withdraw(amount: number) {
    if (amount > account.balance) {
      console.log("Insufficient funds");
    } else {
      account.balance -= amount;
      console.log(`You have withdrawn $${amount}. Your new balance is $${account.balance}`);
    }
  }
  
  function deposit(amount: number) {
    account.balance += amount;
    console.log(`You have deposited $${amount}. Your new balance is $${account.balance}`);
  }
  
  function Atm() {
    console.log("Welcome to the ATM!");
    console.log("What would you like to do?");
    console.log("1. Check Balance");
    console.log("2. Withdraw");
    console.log("3. Deposit");
  
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readline.question("Enter your choice: ", (choice: any) => {
      switch (choice) {
        case "1":
          checkBalance();
          break;
        case "2":
          readline.question("Enter amount to withdraw: ", (amount: string) => {
            withdraw(parseInt(amount));
            readline.close();
          });
          break;
        case "3":
          readline.question("Enter amount to deposit: ", (amount: string) => {
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
  
  Atm();