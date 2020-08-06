const Manager = require('../lib/manager.js');
// jest.mock('../lib/Employee');

test('creates a manager employee with an office number', () => {
    const manager = new Manager('Susan', 1234567890);

    expect(manager.officeNumber).toEqual(expect.any(Number));
    
});

test('creates a manager with a role of manager', () => {
    const manager = new Manager('Susan', 1234567890);

    expect(manager.role).toBe('Manager');
});

test("gets manager's role", () => {
    const manager = new Manager('Susan', 1234);

    expect(manager.getRole()).toBe('Manager');
});