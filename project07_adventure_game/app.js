import inquirer from "inquirer";
import chalk from "chalk";
const adventure = {
    name: "Hide and Seek",
    location: "A scary forest, Haunted House, Cave",
};
console.log(chalk.rgb(123, 45, 67).underline("WELCOME TO ADVENTURE GAME!"));
const gameStart = async function () {
    console.log(` You find yourself in ${adventure.location}.`);
    const adventureName = await inquirer.prompt([{
            type: "list",
            name: "name",
            message: "Where would you like to do play?",
            choices: [
                "Scary forest",
                "Haunted House",
                "Cave",
                "Go back home",
                "Quit the game",
            ],
        },
    ]);
    switch (adventureName.name) {
        case "Scary forest":
            console.log("You start exploring the forest.");
            break;
        case "Haunted House":
            console.log("You start exploring the haunted house.");
            break;
        case "Cave":
            console.log("You start exploring the Cave.");
            break;
        case "Go back home":
            console.log("You go back home.");
            break;
        case "Quit the game":
            console.log("Thanks for playing!");
            process.exit(0);
    }
};
gameStart();
