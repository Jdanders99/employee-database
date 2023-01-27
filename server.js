const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require('console.table');
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'pw5253',
        database: 'employee_db'
    },
    console.log('Connected to the employee db')
);

function startPrompt() {
    inquirer.prompt({
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'None']
    })
        .then((answer) => {
            if(answer.task == 'View Departments') {
                db.query('SELECT * FROM departments', function (err, res) {
                    console.table(res)
                    if (err) throw err
                })
        
            } else if(answer.task == 'View Roles') {
                db.query('SELECT * FROM roles', function (err, res) {
                    console.table(res)
                    if (err) throw err
                })
            } else if(answer.task == 'View Employees') {
                db.query('SELECT * FROM employees', function (err, res) {
                    console.table(res)
                    if (err) throw err
                })
            }
        
    })    
};

startPrompt();