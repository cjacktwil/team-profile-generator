//test that getGitHub() returns a string

//test that getRole() returns Engineer

const Engineer = require('../lib/engineer');

test('creates an engineer with a GitHub account', () => {
    const engineer = new Engineer('Sam', 'github username');

    expect(engineer.github).toEqual(expect.any(String));
});

test('creates engineer with role of engineer', () => {
    const engineer = new Engineer('Sam', 'GH UN');

    expect(engineer.role).toBe('Engineer');
});

test("gets engineer's github username", () => {
    const engineer = new Engineer('Sam', 'GHUN');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Sam', 'GHUN');

    expect(engineer.getRole()).toBe('Engineer');
});