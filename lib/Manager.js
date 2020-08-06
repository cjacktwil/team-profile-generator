const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNumber) {
        super(name);

        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
};
    // In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'

module.exports = Manager;