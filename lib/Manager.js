const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        // this.id = id;
        // this.email = email;
        this.role = 'Manager';
    }
};

module.exports = Manager;