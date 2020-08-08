const Intern = require('../lib/Intern');

test('creates an intern with a name and school', () => {
    const intern = new Intern('Bob', 1234, 'bob@bob.com', 'University of Home');

    expect(intern.name).toBe('Bob');
    expect(intern.school).toBe('University of Home');
    expect(intern.role).toBe('Intern');
    expect(intern.getSchool()).toBe('University of Home');
});

// test("gets intern's school", () => {
//     const intern = new Intern('Bob', 'University of Home');

//     expect(intern.getSchool()).toBe('University of Home');
// })

//test that getSchool() returns a school

//test that getRole() returns Intern