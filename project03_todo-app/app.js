import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    let user = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "Write your todo",
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more",
            value: false,
        },
    ]);
    let { todo, addMore } = user;
    loop = addMore;
    if (todo) {
        todos.push(todo);
    }
    if (todos.length > 0) {
        for (let i of todos) {
            console.log(i);
        }
    }
}
