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
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Pleaes enter the team manager's office number.",
        validate: officeNumberInput => {
            if(officeNumberInput) {
                return true;
            } else {
                console.log("Please enter the team manager's office number.");
                return false;
            }
        }
    }    
])
.then(({name, id, email, officeNumber}) => {
    let manager = new Manager(name, id, email, officeNumber)
      
    // data => {
    // let manager = new Manager(data);
    // let {name, id, email} = manager;

    console.log(name);
    console.log(id);
    console.log(email);
    console.log(officeNumber);
    console.log(manager);
})
.then(addEmployee);

};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add another empoloyee?',
            default: false
        }
    ])
    .then(({add}) => {
    if (add) {
        console.log('add employee');
        addEmployeeType();
    } else {
        console.log('finished adding');
    }
})
};


const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter the engineer's name!");
                return false;
              }
            }
          },
          {
              type: 'input',
              name: 'id',
              message: "What is the engineer's employee ID?",
              validate: idInput => {
                  if(idInput) {
                      return true;
                  } else {
                      console.log("Please enter the engineer's employee ID.");
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'email',
              message: "Please enter the engineer's email address.",
              validate: emailInput => {
                  if(emailInput) {
                      return true;
                  } else {
                      console.log("Please enter the engineer's email address.");
                      return false;
                  }
              }
          },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's GitHub username?",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log("Please enter this engineer's GitHub username.");
                    return false;
                }
            }
        }
    ])
    .then(({name, id, email, github}) => {
        let engineer = new Engineer(name, id, email, github)
        console.log(name);
        console.log(id);
        console.log(email);
        console.log(github);
        console.log(engineer);
     
})
.then(addEmployee);
};

const addIntern = () => {
   return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the engineer's name!");
            return false;
          }
        }
      },
      {
          type: 'input',
          name: 'id',
          message: "What is the intern's employee ID?",
          validate: idInput => {
              if(idInput) {
                  return true;
              } else {
                  console.log("Please enter the engineer's employee ID.");
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Please enter the intern's email address.",
          validate: emailInput => {
              if(emailInput) {
                  return true;
              } else {
                  console.log("Please enter the engineer's email address.");
                  return false;
              }
          }
      },    
    {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
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
    .then(({name, id, email, school}) => {
        let intern = new Intern(name, id, email, school)
        console.log(name);
        console.log(id);
        console.log(email);
        console.log(school);
        console.log(intern);
})
.then(addEmployee);
};

const addEmployeeType = () => {
        return inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'What type of employee would you like to add?',
            choices: ['Engineer', 'Intern'],
        }
    ])
.then(({employee}) => {
    if (employee === 'Engineer') {
        console.log('engineer');
        addEngineer();
    } else if (employee === 'Intern') {
        console.log('intern');
        addIntern();
    }
})
};

// const buildTeam = () => {
// addManager()
// .then(({name, id, email, officeNumber}) => {
//     let manager = new Manager(name, id, email, officeNumber)
      
    // data => {
    // let manager = new Manager(data);
    // let {name, id, email} = manager;

//     console.log(name);
//     console.log(id);
//     console.log(email);
//     console.log(officeNumber);
//     console.log(manager);
// })

// .then.addEmployee(add) 
//     if (add) {
//             console.log("add another employee");
//         } else {
//             console.log("finished");
//         }
// .then(addEmployee);

// console.log(employee); 
// };
// .then(addEmployee = (add) => {
// if (add) {
//     console.log("add another employee");
// } else {
//     console.log("finished");
// }
// };





// .then(({employee}) => {
// if (addEmployee.employee = 'Engineer') {
//     addEngineer().then(({name, id, email, github}) => {
//             let engineer = new Engineer(name, id, email, github)
        
//             console.log(name);
//             console.log(id);
//             console.log(email);
//             console.log(github);
//             console.log(engineer);
//         });
// } else {
// if (employee = 'Intern') {
    // console.log("adding intern");
    // addIntern().then(({name, id, email, school}) => {
    //     let intern = new Intern(name, id, email, school)

    //     console.log(name);
    //     console.log(id);
    //     console.log(email);
    //     console.log(school);
    //     console.log(intern);
    // })
// } else {
//     console.log("Finished entering employees.")
// }
// })
// .then(addEngineer().then(({name, id, email, github}) => {
//     let engineer = new Engineer(name, id, email, github)

//     console.log(name);
//     console.log(id);
//     console.log(email);
//     console.log(github);
//     console.log(engineer);
// }))
// .then(({id}) => {
//     let manager = new Manager(id);
//     console.log(id);
//     // console.log(email);
//     console.log(manager);

// })
// .then(function(data) { 
//     addEmployee() 
// if (addEmployee.addEmployee = 'Engineer') {
//     // addEngineer()
//     console.log("add engineer");
// } else if (addEmployee.addEmployee = 'Intern') {
//     // addIntern();
//     console.log("added intern");
// } else {
//     console.log("team complete");
// }
// }
// )
// };
// buildTeam();
// module.exports = addManager();
// module.exports = addEmployee();

addManager();
// addEmployee();
// addEmployeeType();