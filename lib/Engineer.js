// In addition to Employee's properties and methods, Engineer will also have:
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, github) {
        super(name);

        this.github = github;
        this.role = 'Engineer';
    }

    getGithub() {
        return this.github;
    }
    
};

module.exports = Engineer;
// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'