const Manager = require('../lib/Manager');

test('creates the manager object', () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com",
        officeNumber: "12345678"
    }
    const manager = new Manager(obj);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test('get manager role', () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com",
        officeNumber: "12345678"
    }
    const manager = new Manager(obj);
    expect(manager.getRole()).toEqual(expect.any(String));
});