const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const inquirer = require('inquirer');
// const { noop } = require('rxjs');

// const inquirer = require('inquirer');
// const generatePage = require('./src/page-template.js');
// const { writeFile, copyFile } = require('./utils/generate-site.js');

const addManager = () => {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the team manager's name!");
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's employee ID?",
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
                console.log("Please enter the team manager's employee ID.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the team manager's email address.",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter the team manager's email address.");
                return false;
            }
        }
    }    
])};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add another empoloyee?',
            default: false
        }, 
        {
            type: 'list',
            name: 'addEmployee',
            meassage: 'What type of empoloyee would you like to add?',
            choices: ['Engineer', 'Intern'],
            validate: addEmployeeList => {
                if(addEmployeeList) {
                    return true;
                } else {
                    console.log("Please select the type of employee that you wouldlike to add.");
                    return false;
                }
            },
            when: ({add}) => add
        }
    ])
    if (addManager.addEmployee = 'Engineer') {
        addEngineer();
    } else if (addManager.addEmployee = 'Intern') {
        addIntern();
    } else {
        console.log("Finished entering employees.")
    };
};


const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: "What is this employee's GitHub username?",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log("Please enter this employee's GitHub username.");
                    return false;
                }
            }
        }
    ])
};

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: "What is this employee's school?",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log("Please enter this employee's school.");
                    return false;
                }
            }
        }
    ])
};

module.exports = addManager();
// module.exports = addEmployee();