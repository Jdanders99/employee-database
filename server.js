const inquirer = require("inquirer");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'pw5253',
        database:'employee_db'
    },
);

function startPrompt () {
    inquirer.prompt({
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'None']
    })
}

startPrompt();