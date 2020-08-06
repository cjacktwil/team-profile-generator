const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, school) {
        super(name);

        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    };
};

module.exports = Intern;



// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'