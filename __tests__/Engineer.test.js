const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com",
        github: "rfabreu"
    }
    const engineer = new Engineer(obj);
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(engineer.any(Number));
    expect(engineer.email).toEqual(engineer.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets url path to engineer's github", () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com",
        github: "rfabreu"
    }
    const engineer = new Engineer(obj);
    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test('retrieves engineer role', () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com",
        github: "rfabreu"
    }
    const engineer = new Engineer(obj);
    expect(engineer.getRole()).toEqual(expect.any(String));
});