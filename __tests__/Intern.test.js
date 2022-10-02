const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com",
        school: "University of Toronto"
    }
    const intern = new Intern(obj);
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("get intern's school name", () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com",
        school: "University of Toronto"
    }
    const intern = new Intern(obj);
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("get intern's role", () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com",
        school: "University of Toronto"
    }
    const gitHub = "rfabreu";
    const intern = new Intern(obj, gitHub);
    expect(intern.getRole()).toEqual(expect.any(String));
});