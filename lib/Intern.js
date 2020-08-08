const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        // inquirer.prompt([
        //     {
        //         type: 'input',
        //         name: 'school',
        //         message: "What is the employee's school?",
        //         validate: schoolInput => {
        //             if(schoolInput) {
        //                 return true;
        //             } else {
        //                 console.log("Please enter the employee's school.");
        //                 return false;
        //             }
        //         }
        //     }
        // ])
        return this.school;
    };
};

module.exports = Intern;
