const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require("./src/page-generator");

let myTeam = [];

const init = () => {

    console.log(`
        Welcome to the Team Profile Generator!
        `);
    console.log(`
        Follow the prompts below to build your team's profile.
        `);

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
                if (idInput) {
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
                if (emailInput) {
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
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number.");
                    return false;
                }
            }
        }
    ])
        .then(({ name, id, email, officeNumber }) => {
            this.manager = new Manager(name, id, email, officeNumber);
            myTeam.push(this.manager)
        })
        .then(addEmployee)
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
        .then(({ add }) => {
            if (add) {
                addEmployeeType();
            } else {
                createTeam(myTeam);
                console.log('Team complete.');
            }
        })
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
        .then(({ employee }) => {
            if (employee === 'Engineer') {
                console.log('Adding an engineer.');
                addEngineer();
            } else if (employee === 'Intern') {
                console.log('Adding an intern.');
                addIntern();
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
                if (idInput) {
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
                if (emailInput) {
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
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter this engineer's GitHub username.");
                    return false;
                }
            }
        }
    ])
        .then(({ name, id, email, github }) => {
            this.engineer = new Engineer(name, id, email, github)
            myTeam.push(this.engineer);
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
                if (idInput) {
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
                if (emailInput) {
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
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter this employee's school.");
                    return false;
                }
            }
        }
    ])
        .then(({ name, id, email, school }) => {
            this.intern = new Intern(name, id, email, school);
            myTeam.push(this.intern);
        })
        .then(addEmployee);
};

const createTeam = (myTeam) => {
    let teamHtml = [];

    teamHtml.push(myTeam
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .join(''));

    teamHtml.push(myTeam
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join(''));

    teamHtml.push(myTeam
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join(''));

    teamHtml = teamHtml.join('');

    writeFile(teamHtml);
};

const generateManager = (manager) => {
    // console.log("generating manager");

    return `
    <div class="col-sm-6">
    <div class="card">
    <div class="card-header bg-primary text-white">
    <h2 class="card-title">${manager.getName()}</h2>
    <h4><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-briefcase" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"/>
    <path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"/>
  </svg> ${manager.getRole()}</h4>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email: <a href=mailto:"${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
    </div>
    </div>
    `
};

const generateEngineer = (engineer) => {
    // console.log("generating engineer");

    return `
    <div class="col-sm-6">
    <div class="card">
    <div class="card-header bg-primary text-white">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h4><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-laptop" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>
    <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
  </svg> ${engineer.getRole()}</h4>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.getId()}</li>
    <li class="list-group-item">Email: <a href=mailto:"${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    <li class="list-group-item">GitHub Account: <a href="http://github.com/${engineer.getGithub()}"target="_blank">${engineer.github}</a></li>
    </ul>
    </div>
    </div>
    `
};


const generateIntern = (intern) => {

    // console.log("generating intern")
    return `
    <div class="col-sm-6">
    <div class="card">
    <div class="card-header bg-primary text-white">
    <h2 class="card-title">${intern.getName()}</h2>
    <h4><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-book" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 0 1 8.5 2.5v11a.5.5 0 0 1-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 0 1 0 13.5v-11a.5.5 0 0 1 .276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 0 1 .22-.103 12.958 12.958 0 0 1 2.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 0 0 1 2.82z"/>
    <path fill-rule="evenodd" d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 0 0 7.5 2.5v11a.5.5 0 0 0 .854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 0 0-.799-.34 12.96 12.96 0 0 0-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0 1 15 2.82z"/>
  </svg> ${intern.getRole()}</h4>
    </div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.getId()}</li>
    <li class="list-group-item">Email: <a href=mailto:"${intern.getEmail()}">${intern.getEmail()}</a></li>
    <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
    </div>
    </div>
    `;
};

const writeFile = (teamHtml) => {
    fs.writeFile('./dist/index.html', generatePage(teamHtml), err => {
        if (err) throw err;
        console.log("File has been generated and is located in the dist folder.");
    })
};

init();


// module.exports = teamHtml;

// module.exports = myTeam; 
