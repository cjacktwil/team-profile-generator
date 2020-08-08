const inquirer = require('inquirer');

class Employee {
    constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
}

getName() {
    return this.name;
    // return inquirer.prompt([
    //     {
    //       type: 'input',
    //       name: 'name',
    //       message: "What is the employee's name?",
    //       validate: nameInput => {
    //         if (nameInput) {
    //           return true;
    //         } else {
    //           console.log("Please enter the employee's name!");
    //           return false;
    //         }
    //       }
    //     }
    // ])
};

getId() {
    return this.id;
    // return inquirer.prompt([
    // {
    //     type: 'input',
    //     name: 'id',
    //     message: "What is the employee's ID?",
    //     validate: idInput => {
    //         if(idInput) {
    //             return true;
    //         } else {
    //             console.log("Please enter the employee's ID.");
    //             return false;
    //         }
    //     }
    // }
// ])
};

getEmail() {
    return this.email;
//     return inquirer.prompt([
//     {
//         type: 'input',
//         name: 'email',
//         message: "Please enter the team manager's email address.",
//         validate: emailInput => {
//             if(emailInput) {
//                 return true;
//             } else {
//                 console.log("Please enter the team manager's email address.");
//                 return false;
//             }
//         }
//     } 
// ])
};

getRole() {
    return this.role;
}

};

module.exports = Employee;