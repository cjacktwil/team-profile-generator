const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        return this.github;
//         return inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'github',
//                 message: "What is the employee's GitHub username?",
//                 validate: githubInput => {
//                     if(githubInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter the employee's GitHub username.");
//                         return false;
//                     }
//             }
//     }
// ])
    }
};

module.exports = Engineer;