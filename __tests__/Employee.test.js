const Employee = require('../lib/Employee.js');
// jest.mock('../lib/Employee');

test('creates an employee with a name', () => {
    const employee = new Employee('Dave', 1234, 'dave@dave.com');

    expect(employee.name).toBe('Dave'); 
});

test('creates an employee with an id', () => {
    const employee = new Employee('Dave', 1234, 'dave@dave.com');

    expect(employee.id).toEqual(expect.any(Number));
});

test('creates an employee with an email address', () => {
    const employee = new Employee('Dave', 1234, 'dave@dave.com');

    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email).toContain('@');
});

test('creatss an employee with a role of Employee', () => {
    const employee = new Employee('Dave', 1234, 'dave@dave.com');

    expect(employee.role).toBe('Employee');
});

test("gets employee's name", () => {
    const employee = new Employee('Dave', 1234, 'dave@dave.com');

    expect(employee.getName()).toBe('Dave');
});

test("gets employee's ID", () => {
    const employee = new Employee('Dave', 1234, 'dave@dave.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email address", () => {
    const employee = new Employee('Dave', 1234, 'dave@dave.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getEmail()).toContain('@');
});

test("gets employee's role", () => {
    const employee = new Employee('Dave', 1234, 'dave@dave.com');

    expect(employee.getRole()).toBe('Employee');
});

//test that getName() is a string

//test that getID() contains an integer greater than 0

//test that getEmail() is a string and includes @

//test that getRole() returns Employee