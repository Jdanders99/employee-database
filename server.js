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
                    startPrompt();
                })
        
            } else if(answer.task == 'View Roles') {
                db.query('SELECT * FROM roles', function (err, res) {
                    console.table(res)
                    if (err) throw err
                    startPrompt();
                })
            
            } else if(answer.task == 'View Employees') {
                db.query('SELECT * FROM employees', function (err, res) {
                    console.table(res)
                    if (err) throw err
                    startPrompt();
                })
            
            } else if(answer.task == 'Add a Department') {
                inquirer.prompt({
                    type: 'input',
                    message: 'What department would you like to add?',
                    name: 'depName'
                })
                .then((answer) => {
                    db.query(`INSERT INTO departments (department_name) VALUES ('${answer.depName}')`, function (err, res) {
                        console.table(res)
                        if (err) throw err
                        startPrompt();
                    })
                })
            
            } else if(answer.task == 'Add a Role') {
                inquirer.prompt({
                    type: 'input',
                    message: 'Enter new role:',
                    name: 'newRole'
                },
                {
                    type: 'input',
                    message: 'What is expected salary?',
                    name: 'newSalary'
                },
                {
                    type: 'input',
                    message: 'What is the Department ID?',
                    name: 'newDepId'
                })
                .then((answer) =>{
                    db.query(`INSERT INTO roles (job_title, salary, departments_id) VALUES (${answer.newRole}, ${answer.newSalary}, ${answer.newDepId})`), function (err, res) {
                        console.table(res)
                        if (err) throw err
                        startPrompt();
                    }
                })
            
            } else if(answer.task == 'Add an Employee') {
                inquirer.prompt({
                    type: 'input',
                    message: 'Enter employees first name.',
                    name: 'firstName'
                },
                {
                    type: 'input',
                    message: 'Enter employees last name.',
                    name: 'lastName'
                },
                {
                    type: 'input',
                    message: 'What is their role?',
                    name: 'empRole'
                },
                {
                    type: 'input',
                    message: 'If manager, what is their ID?',
                    name: 'empMan'
                })
                .then((answer) => {
                    db.query(`INSERT INTO employees (first_name, last_name, manager_id, roles_id) VALUES (${answer.firstName}, ${answer.lastName}, ${answer.empRole}, ${answer.empMan})`), function (err, res) {
                        console.table(res)
                        if (err) throw err
                        startPrompt();
                    }
                    })
            } else if (answer == 'None') {
                stopPrompt();
            }
    })    
};

startPrompt();

function stopPrompt() {
    connection.end();
};
